import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

export enum TokenStatus {
	  VALID,
	  INVALID,
	  EXPIRED,
	  SENDING,
	  SENT
	}


@Component({
selector: 'app-token',
templateUrl: './token.component.html',
styleUrls: ['./register.component.css']
})
export class TokenComponent implements OnInit {

	token = '';
	tokenStatus = TokenStatus;
	status : TokenStatus;
	errorMessage = '';

	constructor(private authService: AuthService, private route: ActivatedRoute) {

	}

	ngOnInit(): void {
		this.token = this.route.snapshot.queryParamMap.get('token');
		if(this.token){
			this.authService.verifyToken(this.token).subscribe(
			data => {
				this.status = TokenStatus[data.message as keyof typeof TokenStatus];
			}
			,
			err => {
				this.errorMessage = err.error.message;
			}
			);
		}	
	}

	resendToken(): void {
		this.status = TokenStatus.SENDING;
		this.authService.resendToken(this.token).subscribe(
		data => {
			this.status = TokenStatus.SENT;
		}
		,
		err => {
			this.errorMessage = err.error.message;
		}
		);
	}
}
