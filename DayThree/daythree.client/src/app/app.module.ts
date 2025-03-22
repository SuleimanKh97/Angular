import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './Admin/product/product.component';
import { CategoryComponent } from './Admin/category/category.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { AddproductComponent } from './Admin/addproduct/addproduct.component';
import { AddcategoryComponent } from './Admin/addcategory/addcategory.component';
import { EditcategoryComponent } from './Admin/editcategory/editcategory.component';
import { EditproductComponent } from './Admin/editproduct/editproduct.component';
import { ProfileComponent } from './User/profile/profile.component';
import { EditprofileComponent } from './User/editprofile/editprofile.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProductComponent,
    CategoryComponent,
    DashboardComponent,
    AddproductComponent,
    AddcategoryComponent,
    EditcategoryComponent,
    EditproductComponent,
    ProfileComponent,
    EditprofileComponent
    
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
