import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer.class';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl: string = "http://localhost:53511/api/customers";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Customer[]>{
    return this.http.get(`${this.baseUrl}`) as Observable<Customer[]>;
  }

  get(id: number): Observable<Customer>{
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<Customer>;
  }

  create(customer: Customer): Observable<Customer> {
    return this.http.post(`${this.baseUrl}`, customer) as Observable<Customer>;
  }

  change(customer: Customer): Observable<any> {
    return this.http.put(`${this.baseUrl}/${customer.id}`, customer) as Observable<any>;
  }

  remove(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`) as Observable<any>;
  }
}
