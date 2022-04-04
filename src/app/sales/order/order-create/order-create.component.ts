import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../customer/customer.class';
import { CustomerService } from '../../customer/customer.service';
import { Order } from '../order.class';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {

  order: Order = new Order();
  customers!: Customer[];
 

  constructor(
    private ordsvc:  OrderService,
    private custsvc: CustomerService,
    private router: Router
  ) { }
 
  save(): void{
    this.order.customerId = +this.order.customerId;
    this.ordsvc.create(this.order).subscribe({
      next: (res) => {
        console.debug("Order added");
        this.router.navigateByUrl("/order/list")
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  ngOnInit(): void {
    this.custsvc.list().subscribe({
      next: (res) => {
        console.debug("Customers:", res);
        this.customers = res;
      }
    });
  }

}
