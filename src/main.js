import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Population } from './population.js'
import { Disease } from './disease.js'

$(document).ready(function() {
  let disease = new Disease('Ebola');
  disease.diseaseType();
  let pop = new Population(1000, disease.type, disease.infectionRate, disease.mortalityRate);
  console.log(pop);
  pop.infection();
});
