import { Product } from "./product.model";
import { Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class ProductRepository {
    private products: any;
    private categories: string[] = [];

    constructor(private http: HttpClient, private router: Router) {
        this.http.get('/product').subscribe(data => {
            console.log(data);
            this.products = data;
            this.categories = this.products.map(p => p.category).filter((c, index, array) => array.indexOf(c) == index).sort();
          }); 
     }

    getProducts(category: string = null): Product[] {
        if (category == null) return this.products;
        else
        return this.products.filter(p => category == null || category == p.category);
//        return this.products.filter(p => category == null || category == p.category);
    }

    getProduct(id: number): Product {
        return this.products.find(p => p.id == id);
    }

    getCategories(): string[] {
        return this.categories;
    }
}
