import { Population } from './population.js';

export class City extends Population {
  constructor(name, healthyPop, disease, infectionRate, mortalityRate, cityNum){
    super(healthyPop, disease, infectionRate, mortalityRate);
    this.healthyPop = healthyPop/cityNum;
    this.name = name;
    this.infected = false;
    this.researchStation = 0;
    this.scientists = 0;
    this.quarantine = false;
  }

  _breakOut() {
    if (this.infected === true) {
      if (this.sickPop < 1 && this.healthyPop > 0) {
        this.infection();
      }
    }
  }

  // _researchStation() {
  //
  //   if(this.researchStation > 0) {
  //
  //   }
  //
  // }

  // _cityScientist() {
  //
  //   if(this.researchStation >= 1 && this.scientists ){
  //     this.scientists += 1;
  //   }
  // }


}
