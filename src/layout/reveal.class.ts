import { Container, Graphics, Text } from "pixi.js";
import { Colors, Cordinates, Cursos, EventMode } from "../shared/enums";

export class Reveal {
  private readonly Y_X_GAP = 70;

  private _container = new Container();

  private btn = new Graphics();

  get container(): Container {
    return this._container;
  }

  init() {
    this._container.position.set(
      Cordinates.CANVAS_WIDTH / 2 - this.Y_X_GAP,
      Cordinates.CANVAS_HEIGHT - this.Y_X_GAP
    );
    this.renderButton();
  }

  renderButton() {
    this.btn.roundRect(0, 0, 100, 50, 10).fill({ color: Colors.RED });
    this.btn.eventMode = EventMode.DYNAMIC;
    this.btn.cursor = Cursos.POINTER;
    const revealText = new Text({
      text: "Reveal",
      style: { fill: Colors.WHITE, fontSize: 16 },
    });
    revealText.position.set(
      this.btn.width / 2 - revealText.width / 2,
      this.btn.height / 2 - revealText.height / 2
    );
    this._container.addChild(this.btn, revealText);
  }
}
