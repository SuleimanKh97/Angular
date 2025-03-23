import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    var productId: any = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(productId).subscribe(data => {
      this.product = data;
      console.log(productId);
    });
  }
  addToCart(): void {
    console.log(`${this.product.name} تمت إضافته إلى السلة.`);
    // يمكنك استدعاء خدمة لإضافة المنتج إلى السلة
  }
}
