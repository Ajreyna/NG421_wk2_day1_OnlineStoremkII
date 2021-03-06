import { Injectable } from '@angular/core';
import { IProduct } from './Model/iproduct';
import products from './products';
//import { products } from './products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  shoppingCart: Array<IProduct>;
  products: IProduct[] = [];
  constructor() {
    this.products = products;
   }

   getProducts(): Array<IProduct> {
     return this.products;
   }

   getShoppingCart(): Array<IProduct> {
     return this.shoppingCart;
   }

   addToCart(product: IProduct){
     this.shoppingCart.push(product);
   }
}