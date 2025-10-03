import { Application, Assets } from "pixi.js";
import { CardDeck } from "./layout";
import { manifest } from "./constants";
import { Reveal } from "./layout/reveal.class";

class CardGame {
  private readonly RESTART_TIME = 2000;

  private app = new Application();

  private appContainer = document.getElementById("app");

  private cardDeck = new CardDeck();
  private revealBtn = new Reveal();

  private restartTimeout?: ReturnType<typeof setTimeout>;

  constructor() {
    Assets.addBundle("cards", manifest);
  }

  init() {
    Assets.init({
      preferences: {
        preferCreateImageBitmap: false,
      },
    });

    Assets.loadBundle(["cards"]).then(async () => {
      await this.app.init({
        width: 500,
        height: 500,
        backgroundAlpha: 0,
        resolution: window.devicePixelRatio || 1,
        antialias: true,
      });
      if (this.appContainer) {
        this.appContainer.appendChild(this.app.canvas);
      }

      this.cardDeck.init();
      this.revealBtn.init(this.cardDeck.cardDeck);
      this.app.stage.addChild(this.cardDeck.continer, this.revealBtn.container);
    });
    this.gameRestart();
  }

  gameRestart() {
    this.revealBtn.roundEnd = (data) => {
      if (data.currentIndex === 1) {
        this.restartTimeout = setTimeout(() => {
          this.cardDeck.destroy();
          this.cardDeck.init();
          this.revealBtn.init(this.cardDeck.cardDeck);
          clearTimeout(this.restartTimeout);
        }, this.RESTART_TIME);
      }
    };
  }
}

const game = new CardGame();
game.init();
