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

  values.position.set(card.width / 2 - values.width / 2, 10);
  suits.position.set(
    card.width / 2 - suits.width / 2,
    card.height / 2 - suits.height / 2
  );

  const symbol = new Sprite(Assets.get(suits.text));
  symbol.anchor.set(0.5);
  symbol.setSize(60, 65);
  symbol.position.set(card.width / 2, card.height - 70);

  card.addChild(values, symbol);
}

export function openCardBackSide(card: Container) {
  const bg = new Graphics()
    .roundRect(0, 0, CARD_WIDTH, CARD_HEIGHT, 10)
    .fill({ color: Colors.WHITE });
  card.addChild(bg);
}
