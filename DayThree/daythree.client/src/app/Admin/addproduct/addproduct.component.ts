import { Component } from '@angular/core';
import { ProductService } from '../../Service/product.service';



@Component({
  selector: 'app-addproduct',
  standalone: false,
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {

  constructor(private addpro: ProductService) { }
  ngOnInit() {
    this.getcategory()
}

  addproduct(data: any) {
    this.addpro.addProduct(data).subscribe(() => {
      alert('New Product have Been Added')
    })
  }
  prodata: any
  getcategory() {
    this.addpro.getCategory().subscribe((data) => {
      this.prodata = data
    })
  }
}
