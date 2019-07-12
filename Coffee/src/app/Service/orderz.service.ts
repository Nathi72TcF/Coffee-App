import { Injectable } from '@angular/core';
import { namespaceHTML } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class OrderzService {

  orders = [];
  price = 0;
  totalquantinty = 0;
  Total;

  // Place order
  coffee;
  shukelas = 0;
  milks;
  quantity;
  coffeeprice;
  Namez;
  Namezz;

  Categoryorders = [
    {id: 'tcf1', pic: 'coffee.jpg', name: 'coffee', price: 20},
    {id: 'tcf2', pic: 'plain coffee.jpg', name: 'plain coffee', price: 15},
    {id: 'tcf3', pic: 'espresso cup.jpg', name: 'espresso', price: 30},
    {id: 'tcf4', pic: 'latte.jpg', name: 'latte', price: 25}
  ];

  constructor() { }

  getcategories(id) {
    for (let i = 0; i => this.Categoryorders.length; i++) {
      if (this.Categoryorders[i].id === id) {
        return this.Categoryorders[i];
      }
    }
  }

  pushingorder(coffee, shukelas, milks, quantity, coffeeprice, Total) {
    this.orders.push({
      coffeeName: coffee,
      shugs: shukelas,
      meleke: milks,
      ngakhi: quantity,
      malini: coffeeprice,
      konke: this.Total
    });
    console.log(this.orders);
  }

  TotalPrice(quantity) {
    this.Total = this.Namezz * this.quantity;
    return this.Total;
  }

  // viewOrders(id) {
  //   const bookedorders = [];
  //   this.orders.forEach(itiye => {
  //     if (itiye.id === id) {
  //       bookedorders.push(itiye);
  //       console.log(itiye);
  //     }
  //   });
  //   return bookedorders;
  // }

  buycoffee() {
    this.orders.push({});
  }

  // countPrice() {
  //   this.Total = this.Namez + +this.shukelas + +this.milks + +this.quantity;
  //   return this.Total;
  //   console.log(this.Total);
  // }

  getcoffees() {
    return this.Categoryorders;
  }

  getorders() {
    return this.orders;
  }
  getName(name) {
    this.Namez = name.name;
    this.Namezz = name.price;
  }

  get_name() {
    return this.Namez;
  }

  get_price() {
    return this.Namezz;
  }

}
