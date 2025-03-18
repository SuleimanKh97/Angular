import { Component } from '@angular/core';
import { ProductService } from '../../Service/product.service';

@Component({
  selector: 'app-addcategory',
  standalone: false,
  templateUrl: './addcategory.component.html',
  styleUrl: './addcategory.component.css'
})
export class AddcategoryComponent {
  constructor(private addcate: ProductService) { }
  ngOnInit() { }

  addcategory(data: any) {
    this.addcate.addCategory(data).subscribe(() => {
      alert('New Category have Been Added')
    })
  }

  

}
