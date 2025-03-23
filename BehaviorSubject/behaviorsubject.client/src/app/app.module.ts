import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { TimerComponent } from './timer/timer.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { DisplayQuoteComponent } from './components/display-quote/display-quote.component';
import { UpdateQuoteComponent } from './components/update-quote/update-quote.component';
import { CreateVoucherComponent } from './Admin/create-voucher/create-voucher.component';
import { ReadVoucherComponent } from './Admin/read-voucher/read-voucher.component';
import { UpdateVoucherComponent } from './Admin/update-voucher/update-voucher.component';
import { VoucherDetailsComponent } from './Admin/voucher-details/voucher-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DeleteVoucherComponent } from './Admin/delete-voucher/delete-voucher.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    CartItemComponent,
    SpecialOffersComponent,
    TimerComponent,
    ProductListComponent,
    DisplayQuoteComponent,
    UpdateQuoteComponent,
    CreateVoucherComponent,
    ReadVoucherComponent,
    UpdateVoucherComponent,
    VoucherDetailsComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    DeleteVoucherComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
