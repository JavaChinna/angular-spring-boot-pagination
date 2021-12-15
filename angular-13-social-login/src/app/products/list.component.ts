import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Product } from './product';
import { PageEvent } from '@angular/material/paginator';
    
@Component({templateUrl: './list.component.html'})
export class ProductListComponent implements OnInit {
     
	products: Product[] = [];
	totalElements: number = 0;
   
	constructor(public productService: ProductService) {
	}
    
	ngOnInit(): void {
		this.getProducts({ page: "0", size: "5" });
	}
	 
	private getProducts(request) {
		this.productService.getAll(request)
		.subscribe(data => {
			this.products = data['content'];
			this.totalElements = data['totalElements'];
		}
		, error => {
			console.log(error.error.message);
		}
		);
	}
	 
	nextPage(event: PageEvent) {
		const request = {};
		request['page'] = event.pageIndex.toString();
		request['size'] = event.pageSize.toString();
		this.getProducts(request);
	}
	  
	deleteProduct(id:number){
		this.productService.delete(id)
		.subscribe(data => {
			this.products = this.products.filter(item => item.id !== id);
			console.log('Product deleted successfully!');
		}
		, error => {
			console.log(error.error.message);
		}
		);
	}
}
