import { Container, Graphics, Text } from "pixi.js";
import { Colors, Cordinates, Cursos, EventMode } from "../shared/enums";
import { playSound } from "../shared/sounds";
import { skewAnimation } from "../shared/functions";

export class Reveal {
  private readonly Y_X_GAP = 70;
  private readonly CLEAR_TIME = 2000;

  private _container = new Container();

  private btn = new Graphics();

  private currentIndex?: number;

  private revealText = new Text();

  private openCardTimeOut?: ReturnType<typeof setTimeout>;

  get container(): Container {
    return this._container;
  }

  init(cardDeck: Container[]) {
    this._container.position.set(
      Cordinates.CANVAS_WIDTH / 2 - this.Y_X_GAP,
      Cordinates.CANVAS_HEIGHT - this.Y_X_GAP
    );
    this.currentIndex = cardDeck.length - 1;
    this.renderButton();
    this.addEvent(cardDeck);
  }

  renderButton() {
    this.btn.roundRect(0, 0, 100, 50, 10).fill({ color: Colors.RED });
    this.btn.eventMode = EventMode.DYNAMIC;
    this.btn.cursor = Cursos.POINTER;
    this.revealText.text = "REVEAL";
    this.revealText.style = {
      fill: Colors.WHITE,
      fontSize: 16,
    };
    this.revealText.position.set(
      this.btn.width / 2 - this.revealText.width / 2,
      this.btn.height / 2 - this.revealText.height / 2
    );
    this._container.addChild(this.btn, this.revealText);
  }

  addEvent(cardDeck: Container[]) {
    this.btn.removeListener?.("pointertap");
    this.btn.addEventListener("pointertap", () => this.revealNext(cardDeck));
  }

  revealNext(cardDeck: Container[]) {
    if (this.currentIndex != undefined && this.currentIndex >= 0) {
      const card = cardDeck[this.currentIndex];
      skewAnimation(card);
      playSound();
      this.btn.eventMode = EventMode.NONE;
      this.btn.cursor = Cursos.DEFAULT;
      this.openCardTimeOut = setTimeout(() => {
        card.removeChildren();
        this.btn.eventMode = EventMode.DYNAMIC;
        this.btn.cursor = Cursos.POINTER;
        clearTimeout(this.openCardTimeOut);
      }, this.CLEAR_TIME);
      this.currentIndex--;
    } else {
      this.btn.eventMode = EventMode.NONE;
      this.btn.cursor = Cursos.DEFAULT;
    }
  }
}
