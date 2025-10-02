import { Container, Graphics, Text } from "pixi.js";
import { CardSuits, CardValues } from "../../constants";
import { Colors } from "../enums";

const CARD_WIDTH = 150;
const CARD_HEIGHT = 180;

export function openCardResult(card: Container) {
  const values = new Text({
    text: CardValues[Math.floor(Math.random() * CardValues.length)],
    style: { fill: Colors.RED, fontSize: 24 },
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

  card.addChild(values, suits);
}

export function openCardBackSide(card: Container) {
  const bg = new Graphics()
    .roundRect(0, 0, CARD_WIDTH, CARD_HEIGHT, 10)
    .fill({ color: Colors.WHITE });
  card.addChild(bg);
}
