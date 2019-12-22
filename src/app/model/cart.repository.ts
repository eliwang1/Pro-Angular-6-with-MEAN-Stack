import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cart } from "./cart.model";
// import { StaticDataSource } from "./static.datasource";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class CartRepository {
    private orders: any;
    carts: any = {};
    constructor(private http: HttpClient, private router: Router) {
        this.http.get('/cart').subscribe(data => {
            console.log(data);
            this.carts = data;
          }); 
    }

    getCarts(): Cart[] {
        return this.carts;
    }

    saveCart(carts) {
        this.http.post('/cart/', carts)
          .subscribe(res => {
              let id = res['_id'];
              this.router.navigate(['/orders']);
            }, (err) => {
              console.log(err);
            }
          );
        // this.dataSource.saveOrder(order);
    }

}
