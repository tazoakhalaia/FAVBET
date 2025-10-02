import { Container, Ticker } from "pixi.js";
import { openCardBackSide, openCardResult } from "./card-result.function";

const ticker = new Ticker();
ticker.start();
let skewStep = 0;

export function skewAnimation(card: Container) {
  skewStep = 0;
  card.sortableChildren = true;
  const oldChild = card.children[0];
  const backSideCard = openCardBackSide();
  const play = () => {
    skewStep += 0.05;
    const progress = Math.min(skewStep, 1);

    if (oldChild) {
      oldChild.skew.set(0.1, progress * 1.2);
    }

    if (progress >= 1) {
      ticker.remove(play);

      if (oldChild) card.removeChild(oldChild);
      const backSide = backSideCard;
      backSide.skew.set(0.5, 1.2);
      card.addChild(backSide);

      let backStep = 0;
      const backPlay = () => {
        backStep += 0.05;
        const backProgress = Math.min(backStep, 1);
        backSide.skew.set(0.5 - 0.5 * backProgress, 1.2 - 1.2 * backProgress);

        if (backProgress >= 1) {
          ticker.remove(backPlay);
          openCardResult(card);
        }
      };
      ticker.add(backPlay);
    }
  };

  ticker.add(play);
}
