var play = {

word: '',
doc: '',
arrword: [],
answer: [],
characters : [
    "LUKE SKYWALKER",
    "ANAKIN SKYWALKER",
    "OBI WAN KENOBI",
    "MACE WINDU",
    "HAN SOLO",
    "LEIA ORGANA",
    "CHEWBACCA"       
],

vehicles : [
    "REPUBLIC CRUISER",
    "SNOWSPEEDER",
    "IMPERIAL SHUTTLE",
    "SANDCRAWLER",
    "IMPERIAL STAR DESTROYER",
    "MILLENNIUM FALCON"
],

planets : [
    "KAMINO",
    "MUSTAFAR",
    "TATOOINE",
    "HOTH",
    "DAGOBAH",
    "JAKKU",
    "STARKILLER BASE"
],
 getword: function(type) {
     if(type === 'chac') {
         this.word = this.characters[Math.floor(Math.random()* this.characters.length)];
         this.arrword = this.word.split('');
         this.arrword.forEach(element => {
             if(element == " ") {
                 this.answer.push("&nbsp");
             } else {
                 this.answer.push("_");
             }
             this.doc = this.answer.join(" ");
         });
         $('#hiddenword').html(this.doc);
     } else if (type ==='veh') {
        this.word = this.vehicles[Math.floor(Math.random()* this.vehicles.length)];
        this.arrword = this.word.split('');
        this.arrword.forEach(element => {
            if(element == " ") {
                this.answer.push("&nbsp");
            } else {
                this.answer.push("_");
            }
            this.doc = this.answer.join(" ");
        });
        $('#hiddenword').html(this.doc);
     } else {
        this.word = this.planets[Math.floor(Math.random()* this.planets.length)];
        this.arrword = this.word.split('');
        this.arrword.forEach(element => {
            if(element == " ") {
                this.answer.push("&nbsp");
            } else {
                this.answer.push("_");
            }
            this.doc = this.answer.join(" ");
        });
        $('#hiddenword').html(this.doc);
     }
 },

};

var computer = {
    losses : 0,
    wins : 0
}

