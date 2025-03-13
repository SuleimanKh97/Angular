import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  constructor(private _proDetail: ProductService, private _active: ActivatedRoute) { }
  ngOnInit() {
    this.get()
  }
  id: any
  productData: any
  get() {
    this.id = this._active.snapshot.paramMap.get("id")
    console.log(this.id)
    this._proDetail.getProductDetails(this.id).subscribe((data: any) => {
      
      this.productData = data
    })
  }
}
