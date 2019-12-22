import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "./order.model";
// import { StaticDataSource } from "./static.datasource";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class OrderRepository {
    private orders: any;
//    order: Order[];
    constructor(private http: HttpClient, private router: Router) {
      }

    getOrders(): Order[] {
        return this.orders;
    }

    saveOrder(order: Order) {
      console.log(order);
        this.http.post('/order/', order)
          .subscribe(res => {
              let id = res['_id'];
//              this.router.navigate(['/orders']);
            }, (err) => {
              console.log(err);
            }
          );
        // this.dataSource.saveOrder(order);
    }

}
