import { Container, Graphics } from "pixi.js";
import { Colors, Cordinates } from "../shared/enums";

export class Reveal {
  private readonly Y_GAP = 70;

  private _container = new Container();

  private btn = new Graphics();

  get container(): Container {
    return this._container;
  }

  init() {
    this.renderButton();
  }

  renderButton() {
    this.btn.roundRect(0, 0, 100, 50, 10).fill({ color: Colors.RED });
    this.btn.position.set(
      Cordinates.CANVAS_WIDTH / 2 - this.btn.width / 2,
      Cordinates.CANVAS_HEIGHT - this.Y_GAP
    );
    this._container.addChild(this.btn);
  }
}
