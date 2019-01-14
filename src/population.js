export class Population {
  constructor(healthyPop, disease, infectionRate, mortalityRate) {
    this.healthyPop = healthyPop;
    this.sickPop = 0;
    this.deadPop = 0;
    this.atRiskFor = {disease:{type:disease, infectionRate:infectionRate, mortalityRate:mortalityRate}};
  }

  infection() {
    let transmission = setInterval(() => {
      this.healthyPop--;
      this.sickPop++;
      if (this.healthyPop === 0) {
        clearInterval(transmission);
      }
    }, this.atRiskFor.disease.infectionRate);

    let fatality = setInterval(() => {
      this.sickPop--;
      this.deadPop++;
      if (this.sickPop === 0) {
        clearInterval(fatality);
      }
    }, this.atRiskFor.disease.mortalityRate);
  }

}
