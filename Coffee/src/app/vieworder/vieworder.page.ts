import { OrderzService } from './../Service/orderz.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.page.html',
  styleUrls: ['./vieworder.page.scss'],
})
export class VieworderPage implements OnInit {

  coffeeArray;

  constructor(public orderzService: OrderzService) {
    this.coffeeArray = this.orderzService.getorders();
   }

  ngOnInit() {
  }

}
