import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { OrderRepository } from "../model/order.repository";
import { CartRepository } from "../model/cart.repository";
import { Order } from "../model/order.model";
import { Cart } from "../model/cart.model";

@Component({
    templateUrl: "checkout.component.html",
    styleUrls: ["checkout.component.css"]
})
export class CheckoutComponent {
    orderSent: boolean = false;
    submitted: boolean = false;

    constructor(public repository: OrderRepository,
                public cartrepository: CartRepository,
                public order: Order,
                public cart: Cart) {}

    submitOrder(form: NgForm) {
        this.submitted = true;
        if (form.valid) {
            this.order.cart = this.cart;
            this.repository.saveOrder(this.order);
//            this.cartrepository.saveCart(this.cart);
/*              .subscribe(order => {
                this.order.clear();
                this.orderSent = true;
                this.submitted = false;
             });
 */
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
}
    }
}
