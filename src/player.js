export class Player {
  constructor() {
    this.role;
    this.hand = [];
    this.turns;
    this.action;
  }

  drawCard(deck) {
    if (this.hand.length <= 3) {
      let card = Math.floor((Math.random() * 13) + 1)
      console.log(card);
      console.log(deck);
      this.hand.push(deck[card]);
    }
  }

  // addResearchPoints() {
  //
  // }

  playCard(card) {
    // let playBank = ['gain1Scientist', 'lose1Scientist', 'diseaseMutation', 'loseReasearchStation']
    // if (card === playBank[0]) {
    this.action = card
    // }
  }
  //
  // play() {
  //
  //   this.action =
  //
  // }
  //
  // play() {
  //
  //   this.action =
  //
  // }

}
