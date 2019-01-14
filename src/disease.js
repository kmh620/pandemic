// import { Population } from './population.js';

export class Disease {
  constructor(type) {
    this.type = type;
    this.infectionRate;
    this.mortalityRate;
  }

  diseaseType() {

    if(this.type === 'Ebola') {
      this.infectionRate = 250;
      this.mortalityRate = 1500;
    }
    // let test = [this.type, this.infectionRate, this.mortalityRate];
    return this.type, this.infectionRate, this.mortalityRate;
  }


}
