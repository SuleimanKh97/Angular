import { Component } from '@angular/core';
import { ProductService } from '../../Service/product.service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(private prod: ProductService) { }

  ngOnInit() {
    this.getproduct()
  }
  prodata: any
  getproduct() {
    this.prod.getProduct().subscribe((data) => {
      this.prodata = data
    })
  }

}
