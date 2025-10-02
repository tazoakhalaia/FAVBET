import { Assets, Container, Sprite } from "pixi.js";

export class CardDeck {
  private readonly CANVAS_WIDTH = 500;
  private readonly CANVAS_HEIGHT = 500;
  private readonly CARD_WIDTH = 150;
  private readonly CARD_HEIGHT = 180;
  private readonly CARD_GAP = 50;

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
        this.CANVAS_WIDTH / 2 - this.CARD_WIDTH / 2 + this.CARD_GAP - i * 20,
        this.CANVAS_HEIGHT / 2 - this.CARD_HEIGHT / 2 - this.CARD_GAP + i * 30
      );
      this._container.addChild(card);
    }
  }
}
