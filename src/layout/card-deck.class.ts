import { Assets, Container, Sprite } from "pixi.js";
import { Cordinates } from "../shared/enums";

export class CardDeck {
  private readonly CARD_WIDTH = 150;
  private readonly CARD_HEIGHT = 180;
  private readonly CARD_GAP_X = 140;
  private readonly CARD_GAP_Y = 10;

  private _container = new Container();

  cardDeck: Container[] = [];

  get continer(): Container {
    return this._container;
  }

  init() {
    this.drawCard();
  }

  drawCard() {
    for (let i = 0; i < 5; i++) {
      const cardContainer = new Container();
      const card = new Sprite(Assets.get("card_back"));
      card.anchor.set(0.5);
      card.setSize(this.CARD_WIDTH, this.CARD_HEIGHT);
      cardContainer.position.set(
        Cordinates.CANVAS_WIDTH / 2 -
          this.CARD_WIDTH / 2 +
          this.CARD_GAP_X -
          i * 20,
        Cordinates.CANVAS_HEIGHT / 2 -
          this.CARD_HEIGHT / 2 -
          this.CARD_GAP_Y +
          i * 30
      );
      cardContainer.addChild(card);
      this.cardDeck.push(cardContainer);
      this._container.addChild(cardContainer);
    }
  }

  destroy() {
    this._container.removeChildren();
    this.cardDeck = [];
  }
}
