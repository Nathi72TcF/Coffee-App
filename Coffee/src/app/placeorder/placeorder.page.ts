import { OrderzService } from './../Service/orderz.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.page.html',
  styleUrls: ['./placeorder.page.scss'],
})
export class PlaceorderPage implements OnInit {

  coffeeArray;
  coffeeArray2;
  oderzz;
  id;

  quantity = 1;
  Total = 0;
  shukelas;
  milks;
  coffee;
  coffeeprice;

  constructor(public orderzService: OrderzService, public route: ActivatedRoute) {
    this.coffeeArray = this.orderzService.getcoffees();
    this.coffee = this.orderzService.get_name();
    this.coffeeprice = this.orderzService.get_price();
   }

   // total price
  //  TotalPrice() {
  //    this.Total = this.oderzz.price + +this.shukelas + +this.milks + +this.quantity;
  //  }

  //  countPrice() {
  //   this.oderzz = this.orderzService.getName(name);
  //   this.Total = this.oderzz.price + +this.shukelas + +this.milks * +this.quantity;
  //  }

  pushingorder() {
    this.orderzService.pushingorder(
      this.coffee,
      this.shukelas,
      this.milks,
      this.quantity,
      this.coffeeprice,
      this.orderzService.TotalPrice(this.quantity)
      );
  }

  TotalPrice(quantity) {
    this.orderzService.TotalPrice(quantity);
  }

  //  Sugar code
  shukela(event) {
    this.shukelas = event.detail.value;
    console.log(this.shukelas);
  }

  // Milk Boolean code
  milk(event) {
    this.milks = event.detail.value;
    if (this.milks === true) {
      this.milks = 5;
    } else {
      if (this.milks === false) {
        this.milks = 0;
      }
    }
    console.log(this.milks);
  }

  // Quantinty code (Increment, decrement, quantinty)
  increment() {
    this.quantity++;
   }

   decrement() {
    if (this.quantity > 1) {
    this.quantity--;
    }
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.coffeeArray = this.orderzService.getcategories(this.id);
      console.log(this.id);
    });
    console.log(this.coffeeArray);

  }

}
