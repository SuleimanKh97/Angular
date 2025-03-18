import { Component } from '@angular/core';
import { ProductService } from '../../Service/product.service';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  constructor(private categ: ProductService) { }

  ngOnInit() {
    this.getcategory()
  }
  prodata: any
  getcategory() {
    this.categ.getCategory().subscribe((data) => {
      this.prodata = data
    })
  }

}
