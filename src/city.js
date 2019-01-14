import { Population } from './population.js';

export class City extends Population {
  constructor(name, healthyPop, disease, infectionRate, mortalityRate, cityNum){
    super(healthyPop, disease, infectionRate, mortalityRate);
    this.healthyPop = healthyPop/cityNum;
    this.name = name;
    this.researchStation;
    this.quarantine;
  }


}
