import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "./order.model";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class OrderRepository {
    private orders: Order[];
    id: number; 
    private loaded: boolean = false;

    constructor(private dataSource: RestDataSource, private http: HttpClient, private router: Router) {
      }
    loadOrders() {
        this.loaded = true;
        this.dataSource.getOrders()
            .subscribe(orders => this.orders = orders);
    }
    getOrders(): Order[] {
      if (!this.loaded) {
          this.loadOrders();
      }
      return this.orders;
  }

    saveOrder(order: Order) {
        this.http.post('/order/', order)
          .subscribe(res => {
              this.id = res['_id'];
            }, (err) => {
              console.log(err);
            }
          );
        // this.dataSource.saveOrder(order);
        this.http.post('http://localhost:3333/Sendmail/' + this.id, order)
          .subscribe(res => {
              let id = res['_id'];
            }, (err) => {
              console.log(err);
            }
          );
    }

    updateOrder(order: Order) {
        this.dataSource.updateOrder(order).subscribe(order => {
            this.orders.splice(this.orders.
                findIndex(o => o.id == order.id), 1, order);
        });
    }

    deleteOrder(id: number) {
        this.dataSource.deleteOrder(id);
    }

}
