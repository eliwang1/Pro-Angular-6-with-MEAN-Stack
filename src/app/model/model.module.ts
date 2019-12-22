import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
// import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { CartRepository } from "./cart.repository";
// import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [HttpClientModule],
  providers: [ProductRepository, Cart, Order, OrderRepository, CartRepository]
})
export class ModelModule { }
