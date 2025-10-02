import { Assets, Container, Sprite } from "pixi.js";
import { Cordinates } from "../shared/enums";

export class CardDeck {
  private readonly CARD_WIDTH = 150;
  private readonly CARD_HEIGHT = 180;
  private readonly CARD_GAP = 90;

  private _container = new Container();
  get continer(): Container {
    return this._container;
  }
  init() {
    this.drawCard();
  }

  drawCard() {
    for (let i = 0; i < 5; i++) {
      const card = new Sprite(Assets.get("card_back"));
      card.setSize(this.CARD_WIDTH, this.CARD_HEIGHT);
      card.position.set(
        Cordinates.CANVAS_WIDTH / 2 - this.CARD_WIDTH / 2 + this.CARD_GAP - i * 20,
        Cordinates.CANVAS_HEIGHT / 2 - this.CARD_HEIGHT / 2 - this.CARD_GAP + i * 30
      );
      this._container.addChild(card);
    }
  }
}
