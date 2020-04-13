import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./product.model";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { map } from "rxjs/operators";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {
  baseUrl: string;
  auth_token: string;
  // private products: Product[] = [];
  private categories: string[] = [];

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }
  authenticate(user: string, pass: string): Observable<boolean> {
    return this.http.post<any>(this.baseUrl + "login", {
        name: user, password: pass
    }).pipe(map(response => {
        this.auth_token = response.success ? response.token : null;
        return response.success;
    }));
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/product');
  }

  updateProduct(product: Product): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + "products");
  }

  saveProduct(product: Product): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + "products");
  }

  deleteProduct(id: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + "products");
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>("/order");
  }
  deleteOrder(id: number) {
    return;
  }
  updateOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + "orders", order);
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + "orders", order);
  }
}
