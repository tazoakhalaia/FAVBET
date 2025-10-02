import { Application, Assets } from "pixi.js";
import { CardDeck } from "./layout";
import { manifest } from "./constants";
import { Reveal } from "./layout/reveal.class";

class CardGame {
  private app = new Application();

  private appContainer = document.getElementById("app");
  
  private cardDeck = new CardDeck();
  private revealBtn = new Reveal();

  constructor() {
    Assets.addBundle('cards', manifest)
  }

  init() {

    Assets.init({
      preferences: {
        preferCreateImageBitmap: false
      }
    })

    Assets.loadBundle(['cards']).then(async () => {
      await this.app.init({
        width: 500 ,
        height: 500,
        backgroundColor: '#bbc4bd',
        resolution: window.devicePixelRatio || 1,
        antialias: true,
      })
      if (this.appContainer) {
        this.appContainer.appendChild(this.app.canvas);
      }

      this.cardDeck.init();
      this.revealBtn.init();
      this.app.stage.addChild(this.cardDeck.continer,this.revealBtn.container);
    })
  }
}

const game = new CardGame();
game.init();