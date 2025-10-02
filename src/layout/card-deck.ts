import { Container } from "pixi.js";

export class CardDeck {
    private _container = new Container();
    get continer(): Container {
        return this._container
    }
    init() {
        console.log('123');
    }
}