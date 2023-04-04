import { Component } from '@angular/core';

class Item {
  purchase: string;
  done: boolean;
  price: number;

  constructor(purchase: string, price: number) {
    this.purchase = purchase;
    this.price = price;
    this.done = false;
  }
}

@Component({
  selector: 'app-root',
  template: `<child-comp><h2>Добро пожаловать {{name}}!</h2></child-comp>`,
  styles: [`h2, p {color:#333;}`]
})
export class AppComponent {
  name = 'Tom';
}
