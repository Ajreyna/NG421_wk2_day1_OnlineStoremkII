import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Model/iproduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  shoppingCart: Array<IProduct>;
  constructor(private ProductService: ProductService) { }

  ngOnInit() {
    this.shoppingCart = this.ProductService.getShoppingCart();
  }

}
