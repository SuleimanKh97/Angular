import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ProductComponent } from './Admin/product/product.component';
import { CategoryComponent } from './Admin/category/category.component';
import { AddproductComponent } from './Admin/addproduct/addproduct.component';
import { AddcategoryComponent } from './Admin/addcategory/addcategory.component';
import { EditcategoryComponent } from './Admin/editcategory/editcategory.component';
import { EditproductComponent } from './Admin/editproduct/editproduct.component';
import { ProfileComponent } from './User/profile/profile.component';
import { EditprofileComponent } from './User/editprofile/editprofile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'profile', component: ProfileComponent, children: [
      { path: 'editprofile', component: EditprofileComponent }
  ] },

  {
    path: 'dashboard', component: DashboardComponent, children: [

      { path: 'getproduct', component: ProductComponent },
      { path: 'getcategory', component: CategoryComponent },

      { path: 'addcategory', component: AddcategoryComponent },
      { path: 'addproduct', component: AddproductComponent },

      { path: 'editcategory/:id', component: EditcategoryComponent },
      { path: 'editproduct/:id', component: EditproductComponent }





  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
