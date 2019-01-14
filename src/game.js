import { Disease } from './disease.js';
import { City } from './city.js';
import { Player } from './player.js';

export class Game {
  constructor(totalPop){
    this.totalPop = totalPop;
    this.cities = [];
    this.diseases;
    this.researchPoints = 0;
    // this.cardDeck = {researchPointCards:{value:[1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]}, scientistCards:{gainScientist:[1,1,1,1,2]}, consequenceCards:{loseScientist:[1,1,1], diseaseMutation:[1,2,3], loseReasearchStation:[1]}};
    this.cardDeck = {1:'research+1',2:'research+1',3:'research+1',4:'research+1',5:'research+1',6:'gain1Scientist',7:'gain1Scientist',8:'gain1Scientist',9:'gain1Scientist',10:'lose1Scientist',11:'lose1Scientist',12:'diseaseMutation',13:'loseReasearchStation'};

    // this.cardDeckTest = {Rcards:{value:[1,2,3,4]}}
    // console.log(this.cardDeckTest);
  }


  startGame() {
    let player = new Player();
    console.log(player);
    let disease = new Disease('Ebola');
    disease.diseaseType();
    console.log(disease);
    this.generateCities(4, disease);
    this._breakoutCheck();
    this.diseaseSpread(disease);
    player.drawCard(this.cardDeck);
    console.log(player.hand);
    // this.cities[0].infected = true;
  }

  generateCities(amount, disease) {
    let i;
    for (i = 0; i<amount; i++) {
      this.cities.push(new City(`city${i+1}`, this.totalPop, disease.type, disease.infectionRate, disease.mortalityRate, amount));
    }
    console.log(this);
  }

  _breakoutCheck() {
    setInterval(() => {
      this.cities.forEach((city) => {
        city._breakOut();
      });
    },1000);
  }

  diseaseSpread(disease) {
    setInterval(() => {
      this.cities.forEach((city) => {
        console.log((Date.now() - disease.lastCityInfected));
        if (Date.now() - disease.lastCityInfected > 20000) {
          console.log(city.name, city.infected, city.sickPop, city.deadPop);
          let number =  Math.floor((Math.random() * 10000));
          if(number < (1000 - disease.infectionRate)) {
            city.infected = true;
            disease.lastCityInfected = Date.now();
          }
        }
      });
    }, 5000);
  }

  // _parseDeck() {
  //   let parsedDeck = [];
  //   parsedDeck = parsedDeck.concat(this.cardDeck.scientistCards.gainScientist, this.cardDeck.researchPointCards.value, this.cardDeck.consequenceCards.loseScientist, this.cardDeck.consequenceCards.diseaseMutation, this.cardDeck.consequenceCards.loseReasearchStation)
  //   return parsedDeck;
  // }

}
