import { Component, OnInit } from '@angular/core';
import { Order } from '../order.class';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[]= [];

  constructor(
    private ordsvc: OrderService
  ) { }

  ngOnInit(): void {
    this.ordsvc.list().subscribe({
      next:(res) => {
        this.orders = res;
        console.debug("Orders", res);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
