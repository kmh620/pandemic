import { Disease } from './disease.js';
import { City } from './city.js';
import { Player } from './player.js';

export class Game {
  constructor(totalPop){
    this.player;
    this.totalPop = totalPop;
    this.cities = [];
    this.disease;
    this.diseases;
    this.researchPoints = 0;
    this.scientists = 0;
    this.researchStation = 0;
    // this.cardDeck = {researchPointCards:{value:[1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]}, scientistCards:{gainScientist:[1,1,1,1,2]}, consequenceCards:{loseScientist:[1,1,1], diseaseMutation:[1,2,3], loseReasearchStation:[1]}};
    // this.cardDeck = {1:'research+1',2:'research+1',3:'research+1',4:'research+1',5:'research+1', 14:'research+1',15:'research+1',16:'research+1',17:'research+1',18:'research+1', 19:'research+1',20:'research+1',21:'research+1',22:'research+1',23:'research+1', 24:'research+1',25:'research+1',26:'research+1',27:'research+1',28:'research+1', 6:'gain1Scientist',7:'gain1Scientist',8:'gain1Scientist',9:'gain1Scientist',10:'lose1Scientist',11:'lose1Scientist',12:'diseaseMutation',13:'loseReasearchStation'};

    this.cardDeck = ['research+1','research+1','research+1','research+1','research+1', 'research+1','research+1','research+1','research+1','research+1', 'research+1','research+1','research+1','research+1','research+1', 'research+1','research+1','research+1','research+1','research+1', 'gain1Scientist','gain1Scientist','gain1Scientist','gain1Scientist','lose1Scientist','lose1Scientist','diseaseMutation','loseReasearchStation']

    // this.cardDeckTest = {Rcards:{value:[1,2,3,4]}}
    // console.log(this.cardDeckTest);
  }


  startGame() {
    this.player = new Player(this.cardDeck);
    // console.log(this.player);
    let disease = new Disease('Ebola');
    this.disease = disease;
    disease.diseaseType();
    // console.log(disease);
    this.generateCities(4, disease);
    this.cities[0].infected = true;
    this._breakoutCheck();
    this.diseaseSpread(disease);
    this.player.drawCard();
    console.log(this.cardDeck);
    // console.log(this.player.hand);
    // this.cities[0].infected = true;
  }

  generateCities(amount, disease) {
    let i;
    for (i = 0; i<amount; i++) {
      this.cities.push(new City(`city${i+1}`, this.totalPop, disease.type, disease.infectionRate, disease.mortalityRate, amount));
    }
  }

  _breakoutCheck() {
    setInterval(() => {
      this.cities.forEach((city) => {
        city._breakOut();
      });
    },1000);
  }

  _actionCheck(city) {
    console.log(city);
    let actionBank = ['gain1Scientist', 'lose1Scientist', 'diseaseMutation', 'loseReasearchStation'];
    setInterval(() => {
      if (this.player.action === actionBank[0]) {
        this.cites[0].scientists++;
      }
    },1000);
  }

  diseaseSpread(disease) {
    setInterval(() => {
      this.cities.forEach((city) => {
        if (Date.now() - disease.lastCityInfected > 20000) {
          let number =  Math.floor((Math.random() * 10000));
          if(number < (1000 - disease.infectionRate)) {
            city.infected = true;
            disease.lastCityInfected = Date.now();
          }
        }
      });
    }, 5000);
  }

  returnPopulations() {
    let citiesInfo = [];
    this.cities.forEach((city) => {
      let cityInfo = [city.name, city.healthyPop, city.sickPop, city.deadPop];
        citiesInfo.push(cityInfo);
    })
    return citiesInfo;
  }

  playerAction(card) {

    if(card === 'research+1') {
      this.researchPoints++;
    } else if(card === 'gain1Scientist') {
      this.scientists++;
    } else if(card === 'lose1Scientist') {
      if (this.scientists > 0) {
        this.scientists--;
      }
    } else if(card === 'loseReasearchStation') {
      if (this.researchStation > 0) {
        this.researchStation--;
      }
    } else if (card === 'diseaseMutation') {
      debugger;
      if (Math.floor((Math.random() * 10) <= 5)) {
        this.disease.infectionRate -= 25;
      } else this.disease.mortalityRate -= 50;
    } else if (card === "buildRC") {
    if(this.researchPoints >= 50) {
      this.researchStation ++;
      this.researchPoints -= 50;
    } else {
      console.log('You need 50 research points to build a Research Center!');
    }


    }
  }



  // _parseDeck() {
  //   let parsedDeck = [];
  //   parsedDeck = parsedDeck.concat(this.cardDeck.scientistCards.gainScientist, this.cardDeck.researchPointCards.value, this.cardDeck.consequenceCards.loseScientist, this.cardDeck.consequenceCards.diseaseMutation, this.cardDeck.consequenceCards.loseReasearchStation)
  //   return parsedDeck;
  // }

}
