import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order.class';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

order!: Order;
showVerifyButton: boolean = false;
  constructor(
    private ordsvc: OrderService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  remove(): void {
    this.showVerifyButton = !this.showVerifyButton;
      }  
    
      verifyRemove(): void{
        this.showVerifyButton = false;
        this.ordsvc.remove(this.order.id).subscribe({
          next: (res) => {
            console.debug("Order is deleted!");
            this.router.navigateByUrl("/order/list")
          },
          error: (err) => {
            console.error(err);
          }
        });
      }
    
      ngOnInit(): void {
        let id = +this.route.snapshot.params["id"];
        this.ordsvc.get(id).subscribe({
          next: (res) => {
            console.debug("Customer:", res);
            this.order = res;
          },
          error: (err) => {
            console.error(err);
          }
        });
      }
    
    }
