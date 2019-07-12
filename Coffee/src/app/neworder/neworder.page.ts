import { OrderzService } from './../Service/orderz.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neworder',
  templateUrl: './neworder.page.html',
  styleUrls: ['./neworder.page.scss'],
})
export class NeworderPage implements OnInit {

  coffeeArray = [];

  constructor(public orderzService: OrderzService) {
    this.coffeeArray = this.orderzService.getcoffees();
   }

  ngOnInit() {
  }

  setName(name) {
    this.orderzService.getName(name);
  }
}
