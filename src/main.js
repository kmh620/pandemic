import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Population } from './population.js';
// import { Disease } from './disease.js';
import { Game } from './game.js';

$(document).ready(function() {
  let game = new Game(1000);
  game.startGame();

console.log(game.player.hand);

  let viewInfo = game.returnPopulations();
  $('#city-name').text(viewInfo[0][0]);
  let begPop = viewInfo[0][1];

  setInterval(() => {
    let viewInfo = game.returnPopulations();
    $('#healthy').text(viewInfo[0][1]);
    let healthyBar = Math.floor((viewInfo[0][1]/begPop)*100);
    $("#healthy-pop").css("width", healthyBar +"%");
    $('#sick').text(viewInfo[0][2])
    let sickBar = Math.floor((viewInfo[0][2]/begPop)*100);
    $("#sick-pop").css("width", sickBar +"%");
    $('#dead').text(viewInfo[0][3])
    let deadBar = Math.floor((viewInfo[0][3]/begPop)*100);
    $("#dead-pop").css("width", deadBar+"%");
  }, 100);

  $('#card-one').text(game.player.hand[0]);
  $('#card-two').text(game.player.hand[1]);
  $('#card-three').text(game.player.hand[2]);
  $('#card-four').text(game.player.hand[3]);

  // ui_cityProgress(){
  //
  //   $("#healthy-pop").css("width", );
  //
  // }





  // let disease = new Disease('Ebola');
  // disease.diseaseType();
  // let pop = new Population(1000, disease.type, disease.infectionRate, disease.mortalityRate);
  // console.log(pop);
  // pop.infection();
});
