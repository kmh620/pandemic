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
    this.cities[0].infected = true;
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

}
