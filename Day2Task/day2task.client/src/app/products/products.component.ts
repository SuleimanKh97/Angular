import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private _products: ProductService, private _active: ActivatedRoute) { }
  ngOnInit() {
    this.get();
  }

  catagoryId: any
  productsData: any

  get() {
    this.catagoryId = this._active.snapshot.paramMap.get("id");
    this._products.getProductbyCategoryId().subscribe(data => {
      this.productsData = data.filter((f: any) => f.categoryId == this.catagoryId)
    })
  }
}
