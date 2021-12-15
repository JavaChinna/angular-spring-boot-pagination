import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppConstants } from '../common/app.constants';    
import { Product } from '../products/product';
     
@Injectable({providedIn: 'root'})
export class ProductService {
     
	constructor(private httpClient: HttpClient) {
	}
     
	getAll(request): Observable<any> {
		const params = request;
		return this.httpClient.get(AppConstants.API_URL + 'products', {params});
	}
     
	create(product:any): Observable<any> {
		return this.httpClient.post(AppConstants.API_URL + 'products', JSON.stringify(product), AppConstants.httpOptions)
	}  
     
	find(id:number): Observable<any> {
		return this.httpClient.get<Product>(AppConstants.API_URL + 'products/' + id)
	}
     
	update(id:number, product:Product): Observable<any> {
		return this.httpClient.put(AppConstants.API_URL + 'products/' + id, JSON.stringify(product), AppConstants.httpOptions)
	}
     
	delete(id:number){
		return this.httpClient.delete(AppConstants.API_URL + 'products/' + id)
	}
}
