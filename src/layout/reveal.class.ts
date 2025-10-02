import { Container, Graphics } from "pixi.js";
import { Colors } from "../shared/enums";

export class Reveal {
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
    this._container.addChild(this.btn);
  }
}
