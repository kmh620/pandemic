import { Population } from './population.js';
import { Disease } from './disease.js';


export class City extends Population {
  constructor(totalPop){
    super();
    this.healthyPop = totalPop / 4;
    this.name;
    this.researchStation;
    this.quarantine;
  }
}
