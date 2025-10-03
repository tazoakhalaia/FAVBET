import { Assets, Container, Graphics, Sprite, Text } from "pixi.js";
import { CardSuits, CardValues } from "../../constants";
import { Colors } from "../enums";

const CARD_WIDTH = 150;
const CARD_HEIGHT = 180;

export function openCardResult(card: Container) {
  const values = new Text({
    text: CardValues[Math.floor(Math.random() * CardValues.length)],
    style: { fill: Colors.BLACK, fontSize: 24, fontWeight: "bold" },
  });

  const suits = new Text({
    text: CardSuits[Math.floor(Math.random() * CardSuits.length)],
    style: { fill: Colors.RED, fontSize: 24 },
  });

  values.position.set(-8, -80);

  const symbol = new Sprite(Assets.get(suits.text));
  symbol.anchor.set(0.5);
  symbol.setSize(60, 65);
  values.zIndex = 1;
  symbol.zIndex = 2;
  card.addChild(values, symbol);
}

export function openCardBackSide() {
  const bg = new Graphics()
    .roundRect(0, 0, CARD_WIDTH, CARD_HEIGHT, 10)
    .fill({ color: "#e7ddeb" });
  bg.pivot.set(CARD_WIDTH / 2, CARD_HEIGHT / 2);
  bg.skew.set(0.1, 1.2);
  return bg;
}
