export class Player {
  constructor() {
    this.role;
    this.hand = [];
    this.turns;
  }

  // const cardDeck = {researchPointCards:{value:{1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5}}, scientistCards:{gainScientist:{1,1,1,1,2}}, consequenceCards:{loseScientist:{1,1,1}, diseaseMutation:{1,2,3}, loseReasearchStation:{1}}};

  drawCard(deck) {
    if (this.hand.length < 3) {
      let card = Math.floor((Math.random() * 13) + 1)
      console.log(card);
      console.log(deck);
      this.hand.push(deck[card]);
    }
  }

  // drawCard(deck) {
  //   let card = Math.floor((Math.random() * (deckLengths[0] + deckLengths[1] + deckLengths[2] + deckLengths[3] + deckLengths[4])))
  //   console.log(card);
  //   if (card <= deckLengths[0]) {
  //     console.log('scientistCards');
  //   } else if (card > deckLengths[0] && card <= deckLengths[1]) {
  //     console.log('researchCards');
  //   } else if (card > deckLengths[0]+deckLengths[1] && card  <= deckLengths[2]) {
  //     console.log('loseScientist');
  //   }  else if (card > deckLengths[0]+deckLengths[1]+deckLengths[2] && card  <= deckLengths[3]) {
  //     console.log('diseaseMutation');
  //   } else if (card > deckLengths[0]+deckLengths[1]+deckLengths[2]+deckLengths[3] && card  <= deckLengths[4]) {
  //     console.log('loseReasearchStation');
  //   }
  // }



}
