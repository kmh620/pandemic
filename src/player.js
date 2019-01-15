export class Player {
  constructor(deck) {
    let playerDeck = deck.slice();
    this.role;
    this.hand = [];
    this.turns;
    this.action;
    this.deck = playerDeck;
  }

  drawCard() {

    let card = Math.floor((Math.random() * this.deck.length) + 1)
    if (!(this.deck[card] === '')) {
      if (this.hand.length < 4) {
        this.hand.push(this.deck[card]);
        this.drawCard();
      } else {
        return this.deck[card];
      }
    }
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

  playCureDisease(cure) {
    this.action = cure;
  }

  playQuarantineCity(quarantine) {
    this.action = quarantine;
  }

  // playAssignScientist() {
  //
  //   this.action =
  //
  // }

}
