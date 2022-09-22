import { Order } from './../../../models/order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [
    {
      id: 1,
      client: "Ahlem",
      createdAt: new Date('2022-03-25T12:00'),
      products: [],
      status: 'on-going'
    },
    {
      id: 2,
      client: "Ahmed",
      createdAt: new Date('2022-02-14T12:00'),
      products: [],
      status: 'on-going'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.orders.push(this.orders[1])
    this.orders.push(this.orders[2])
  }

}
