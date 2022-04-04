import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer.class';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

 customer!: Customer;
 showVerifyButton: boolean = false;
  constructor(
    private custsvc: CustomerService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  remove(): void {
this.showVerifyButton = !this.showVerifyButton;
  }  

  verifyRemove(): void{
    this.showVerifyButton = false;
    this.custsvc.remove(this.customer.id).subscribe({
      next: (res) => {
        console.debug("Customer is deleted!");
        this.router.navigateByUrl("/customer/list")
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.custsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Customer:", res);
        this.customer = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
