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
  $('#city-name1').text(viewInfo[0][0]);
  let begPop = viewInfo[0][1];
  $('#city-name2').text(viewInfo[1][0]);
  let begPop2 = viewInfo[1][1];
  $('#city-name3').text(viewInfo[2][0]);
  let begPop3 = viewInfo[2][1];
  $('#city-name4').text(viewInfo[3][0]);
  let begPop4 = viewInfo[3][1];

  setInterval(() => {
    let viewInfo = game.returnPopulations();
    $('#healthy1').text(viewInfo[0][1]);
    let healthyBar = Math.floor((viewInfo[0][1]/begPop)*100);
    $("#healthy-pop1").css("width", healthyBar +"%");
    $('#healthy2').text(viewInfo[1][1]);
    let healthyBar2 = Math.floor((viewInfo[1][1]/begPop2)*100);
    $("#healthy-pop2").css("width", healthyBar2 +"%");
    $('#healthy3').text(viewInfo[2][1]);
    let healthyBar3 = Math.floor((viewInfo[2][1]/begPop3)*100);
    $("#healthy-pop3").css("width", healthyBar3 +"%");
    $('#healthy4').text(viewInfo[3][1]);
    let healthyBar4 = Math.floor((viewInfo[3][1]/begPop4)*100);
    $("#healthy-pop4").css("width", healthyBar4 +"%");

    $('#sick1').text(viewInfo[0][2])
    let sickBar = Math.floor((viewInfo[0][2]/begPop)*100);
    $("#sick-pop1").css("width", sickBar +"%");
    $('#sick2').text(viewInfo[1][2])
    let sickBar2 = Math.floor((viewInfo[1][2]/begPop2)*100);
    $("#sick-pop2").css("width", sickBar2 +"%");
    $('#sick3').text(viewInfo[2][2])
    let sickBar3 = Math.floor((viewInfo[2][2]/begPop3)*100);
    $("#sick-pop3").css("width", sickBar3 +"%");
    $('#sick4').text(viewInfo[3][2])
    let sickBar4 = Math.floor((viewInfo[3][2]/begPop4)*100);
    $("#sick-pop4").css("width", sickBar4 +"%");

    $('#dead1').text(viewInfo[0][3])
    let deadBar = Math.floor((viewInfo[0][3]/begPop)*100);
    $("#dead-pop1").css("width", deadBar+"%");
    $('#dead2').text(viewInfo[1][3])
    let deadBar2 = Math.floor((viewInfo[1][3]/begPop2)*100);
    $("#dead-pop2").css("width", deadBar2+"%");
    $('#dead3').text(viewInfo[2][3])
    let deadBar3 = Math.floor((viewInfo[2][3]/begPop3)*100);
    $("#dead-pop3").css("width", deadBar3+"%");
    $('#dead4').text(viewInfo[3][3])
    let deadBar4 = Math.floor((viewInfo[3][3]/begPop4)*100);
    $("#dead-pop4").css("width", deadBar4+"%");
  }, 100);


  $('#card-one').text(game.player.hand[0]);
  $('#card-two').text(game.player.hand[1]);
  $('#card-three').text(game.player.hand[2]);
  $('#card-four').text(game.player.hand[3]);


    $("button#play-one").click(function(event) {
      console.log(event);
      game.playerAction(game.player.hand[0]);
      game.player.deck[(game.player.deck.indexOf(game.player.hand[0]))] = '';
      game.player.hand[0] = game.player.drawCard();
      $('#card-one').text(game.player.hand[0]);
    })

    $("button#play-two").click(function(event) {
      game.playerAction(game.player.hand[1]);
      console.log(event);
      game.player.deck[(game.player.deck.indexOf(game.player.hand[1]))] = '';
      game.player.hand[1] = game.player.drawCard();
      $('#card-two').text(game.player.hand[1]);
    })

    $("button#play-three").click(function(event) {
      game.playerAction(game.player.hand[2]);
      console.log(event);
      game.player.deck[(game.player.deck.indexOf(game.player.hand[2]))] = '';
      game.player.hand[2] = game.player.drawCard();
      $('#card-three').text(game.player.hand[2]);
    })

    $("button#play-four").click(function(event) {
      game.playerAction(game.player.hand[3]);
      console.log(event);
      game.player.deck[(game.player.deck.indexOf(game.player.hand[3]))] = '';
      game.player.hand[3] = game.player.drawCard();
      $('#card-four').text(game.player.hand[3]);
    })


   $("button#build-rc").click(function(event) {
    game.playerAction(this.value)
     console.log(event);
   })

   $("button#cure").click(function(event) {
    game.playerAction(this.value)
     console.log(event);
   })

   $("button#quarantine").click(function(event) {
    game.playerAction(this.value)
     console.log(event);
   })




  // let disease = new Disease('Ebola');
  // disease.diseaseType();
  // let pop = new Population(1000, disease.type, disease.infectionRate, disease.mortalityRate);
  // console.log(pop);
  // pop.infection();
});
