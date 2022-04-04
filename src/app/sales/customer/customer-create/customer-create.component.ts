import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer.class';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customer: Customer = new Customer();

  constructor(
    private custsvc: CustomerService,
    private router: Router
  ) { }

    save(): void{
      this.custsvc.create(this.customer).subscribe({
        next: (res) => {
          console.debug("Customer added");
          this.router.navigateByUrl("/customer/list")
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  ngOnInit(): void {
  }

}
