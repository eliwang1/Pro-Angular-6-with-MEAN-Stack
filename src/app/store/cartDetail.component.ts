import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";

@Component({
//    selector: "store",
    templateUrl: "./cartDetail.component.html"
})
export class CartDetailComponent {
    carts: any;
    constructor(public cart: Cart) {
     }
}
