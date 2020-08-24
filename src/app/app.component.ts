import { Component, OnInit, Type } from '@angular/core';
import { IProduct } from './Model/iproduct';
import { ProductService } from './product.service';
import products from './products';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Array<IProduct> ;

  productWasAdded(product: IProduct) {
    this.productService.addToCart(product);
  }
  constructor(private productService: ProductService){
  }

  ngOnInit(){
    this.products = this.productService.getProducts();
  }

}
