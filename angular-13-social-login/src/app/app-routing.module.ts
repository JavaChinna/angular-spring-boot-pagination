import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { TotpComponent } from './totp/totp.component';
import { OrderComponent } from './order/order.component';
import { TokenComponent } from './register/token.component';
import { ProductListComponent } from './products/list.component';
import { ProductViewComponent } from './products/view.component';
import { ProductAddEditComponent } from './products/add-edit.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'totp', component: TotpComponent },
  { path: 'order', component: OrderComponent },
  { path: 'verify', component: TokenComponent },
  { path: 'products', redirectTo: 'products/list', pathMatch: 'full'},
  { path: 'products/list', component: ProductListComponent },
  { path: 'products/:id/view', component: ProductViewComponent },
  { path: 'products/add', component: ProductAddEditComponent },
  { path: 'products/:id/edit', component: ProductAddEditComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
