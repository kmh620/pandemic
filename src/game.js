import { Disease } from './disease.js';
import { City } from './city.js';

export class Game {
  constructor(totalPop){
    this.totalPop = totalPop;
    this.cities = [];
    this.diseases;
  }


  startGame() {
    let disease = new Disease('Ebola');
    disease.diseaseType();
    console.log(disease);
    this.generateCities(4, disease);
    this._breakoutCheck();
    this.diseaseSpread(disease);
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
          console.log(city.infected);
          let number =  Math.floor((Math.random() * 10000));
          if(number < (1000 - disease.infectionRate)) {
            city.infected = true;
            disease.lastCityInfected = Date.now();
          }
        }
      });
    }, 5000);
  }

}
