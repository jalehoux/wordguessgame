var word='';
var arrword;
var answer =[];
var numletters = 0;
var ships = 7;
var wins = 0;
var losses= 0;

var characters = [
    "LUKE SKYWALKER",
    "ANAKIN SKYWALKER",
    "OBI WAN KENOBI",
    "MACE WINDU",
    "HAN SOLO",
    "LEIA ORGANA",
    "CHEWBACCA"       
];

var vehicles = [
    "REPUBLIC CRUISER",
    "SNOWSPEEDER",
    "IMPERIAL SHUTTLE",
    "SANDCRAWLER",
    "IMPERIAL STAR DESTROYER",
    "MILLENNIUM FALCON"
];

var planets = [
    "KAMINO",
    "MUSTAFAR",
    "TATOOINE",
    "HOTH",
    "DAGOBAH",
    "JAKKU",
    "STARKILLER BASE"
];

$(document).keyup(function(event) {
    if(word != ''){
        a = document.getElementById("letters").innerHTML;
        if(a=="No Letters Guessed") {
            a = "";
        }
        b = a.split(" ");
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            var letter = event.key.toUpperCase();
            if ( b.indexOf(letter) > -1){
                alert("You have already selected that key!");
            } else {
                var letter = event.key.toUpperCase();
                document.getElementById("letters").innerHTML = a + " " + letter;
                fillin(letter); 
            }
        } else {
            alert("Choose a lowercase letter!");
        } 
    } else {
        alert("choose a word first!");
    }
})

function fillin(c) {
    if(word.includes(c)) {
        for(var j =0; j < answer.length; j++) {
            if(arrword[j] === c) {
                answer[j] = c;
                numletters--;
            }
        }
        doc = answer.join(' ');
        document.getElementById("hiddenword").innerHTML= doc;
        document.getElementById("numletters").innerHTML= numletters;
        if (numletters == 0) {
            wins++;
            reset("win");
        } else {
            document.getElementById("outcome").innerHTML= "CORRECT!  Keep guessing to destroy the Death Star!";
            document.getElementById("outcome").style.color = "green";
            setTimeout(function(){ 
                document.getElementById("outcome").style.color = "black"; 
            }, 1500);
        }
    } else {
        ships--;
        document.getElementById("allships").innerHTML= ships;
        document.getElementById("outcome").innerHTML= "WRONG! The Empire destroyed one of your ships...";
        if(ships == 0) {
            losses ++;
            reset("loss");
        }
        document.getElementById("outcome").style.color = "red";
        setTimeout(function(){ 
            document.getElementById("outcome").style.color = "black"; 
        }, 1500);
    }      
}

function getword(type) {
    if(arrword != undefined){
        word='';
        ships = 7;
        answer= [];
        numletters = 0;
    }
    if(type == "chac") {
        word = characters[Math.floor(Math.random() * characters.length)];
    } else if(type =="veh") {
        word = vehicles[Math.floor(Math.random() * vehicles.length)];
    } else {
        word = planets[Math.floor(Math.random() * planets.length)]; 
    }
    var doc;
    arrword = word.split('');
    arrword.forEach(function(element) {
        if(element === " "){ 
            answer.push("&nbsp;");
        } else {
            answer.push("_");
            numletters++;
        }
        doc = answer.join(" ");
    })
    document.getElementById("outcome").innerHTML= "Fight the Empire!  Choose a letter on your keyboard to start!";
    document.getElementById("hiddenword").innerHTML= doc;
    document.getElementById("numletters").innerHTML= numletters;
    document.getElementById("letters").innerHTML= "No Letters Guessed!";
}

function reset(type) {
    word='';
    ships = 7;
    answer= [];
    document.getElementById("letters").innerHTML= "No Letters Guessed";
    document.getElementById("hiddenword").innerHTML= "No Word chosen!";
    document.getElementById("numletters").innerHTML= "";
    document.getElementById("allships").innerHTML= 7;
    if(type == "win") {
        document.getElementById("totalwins").innerHTML= wins;
        document.getElementById("outcome").innerHTML= "WINNER! You destroyed the Death Star! Click button above to play again";
    } else {
        document.getElementById("totallosses").innerHTML= losses;
        document.getElementById("outcome").innerHTML= "OH NO!  The Empire defeated all your ships and sent the rebels packing! Click button above to play again...";
    }
}

