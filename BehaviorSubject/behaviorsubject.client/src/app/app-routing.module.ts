import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ReadVoucherComponent } from './Admin/read-voucher/read-voucher.component';
import { HomeComponent } from './home/home.component';
import { UpdateVoucherComponent } from './Admin/update-voucher/update-voucher.component';
import { VoucherDetailsComponent } from './Admin/voucher-details/voucher-details.component';
import { CreateVoucherComponent } from './Admin/create-voucher/create-voucher.component';
import { DeleteVoucherComponent } from './Admin/delete-voucher/delete-voucher.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productlist', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'allvoucher', component: ReadVoucherComponent },
  { path: 'editvoucher/:id', component: UpdateVoucherComponent },
  { path: 'voucherdetails/:id', component: VoucherDetailsComponent },
  { path: 'addvoucher', component: CreateVoucherComponent },
  { path: 'deletevoucher/:id', component: DeleteVoucherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
