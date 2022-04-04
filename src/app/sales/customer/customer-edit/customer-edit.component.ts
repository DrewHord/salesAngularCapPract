import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer.class';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customer!: Customer;

  constructor(
    private custsvc: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.custsvc.change(this.customer).subscribe({
      next: (res) => {
        console.debug("Customer updated");
        this.router.navigateByUrl("/customer/list")
    },
      error: (err) =>{
        console.log(err);
      }
    });
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.custsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Customer:", res);
        this.customer=res;
    },
      error: (err) =>{
        console.log(err);
      }
    });
  }

}
