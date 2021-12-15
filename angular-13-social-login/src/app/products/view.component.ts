import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './product';
  
@Component({templateUrl: './view.component.html'})
export class ProductViewComponent implements OnInit {
   
  id: number;
  product: Product;
   
  constructor(
    public productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
      
    this.productService.find(this.id).subscribe((data: Product)=>{
      this.product = data;
    });
  }
  
}