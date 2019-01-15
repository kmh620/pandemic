export class Player {
  constructor(deck) {
    let playerDeck = deck
    this.role;
    this.hand = [];
    this.turns;
    this.action;
    this.deck = playerDeck;
  }

  drawCard() {
    this.deck.push("hello")
    let card = Math.floor((Math.random() * this.deck.length) + 1)
    if (!(this.deck[card] === '')) {
      if (this.hand.length < 4) {
        this.hand.push(this.deck[card]);
        this.drawCard();
      } else return this.deck[card];
    } else this.drawCard();
  }

  // addResearchPoints() {
  //  game.researchPoints + ??(researchcards total)
  // }

  playCard(card) {

    this.action = card;


    //this.turns +1 ?? to calculate how many actions taken per turn, max 4??
    // }
  }

  playBuildResearchCenter(buildRC) {

    this.action = buildRC;

  }

  // playAssignScientist() {
  //
  //   this.action =
  //
  // }

}
