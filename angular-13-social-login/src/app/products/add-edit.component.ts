import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
   
@Component({templateUrl: './add-edit.component.html'})
export class ProductAddEditComponent implements OnInit {
  
	id: any;
	form: FormGroup;
	errorMessage;
   
	constructor(public productService: ProductService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) {
		this.createForm();
	}
  
	ngOnInit(): void {
		this.id = this.route.snapshot.paramMap.get('id');
		console.log(this.id);
		if(this.id){
			this.productService.find(this.id).subscribe(x => this.form.patchValue(x));
		}
	}
	
	createForm() {
		this.form = this.fb.group({
		name: ['', [
			Validators.required,
			Validators.minLength(3),
			Validators.maxLength(20),
		] ],
		description: ['', [
			Validators.required,
			Validators.minLength(3),
			Validators.maxLength(100),
		] ],
		version: ['', Validators.required],
		edition: ['', Validators.maxLength(20)]
		});
	}
	
	onSubmit(){
		var response = this.id ? this.productService.update(this.id, this.form.value) : this.productService.create(this.form.value);
		
		response.subscribe(
		data => {
			console.log('Product created / updated successfully!');
			this.router.navigateByUrl('products/list');
		}
		,
		err => {
			this.errorMessage = err.error.message;
		}
		);
	}
}
