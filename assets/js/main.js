var word;
var arrword;
var answer =[];
var numletters = 0;
var ships = 7;

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
    a = document.getElementById("letters").innerHTML;
    b = a.split(" ");
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var letter = event.key.toUpperCase();
        if ( b.indexOf(letter) > -1){
            alert("Choose another key");
        } else {
            var letter = event.key.toUpperCase();
            document.getElementById("letters").innerHTML = a + " " + letter;
            fillin(letter); 
        }
    } else {
        alert("Choose a lowercase letter!");
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
    } else {
        ships--;
        document.getElementById("allships").innerHTML= ships;
    }
        
}

function getword(type) {
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
    document.getElementById("hiddenword").innerHTML= doc;
    document.getElementById("numletters").innerHTML= numletters;
}