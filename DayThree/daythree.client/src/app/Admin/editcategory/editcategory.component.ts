import { Component } from '@angular/core';
import { ProductService } from '../../Service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcategory',
  standalone: false,
  templateUrl: './editcategory.component.html',
  styleUrl: './editcategory.component.css'
})
export class EditcategoryComponent {
  constructor(private editcate: ProductService, private _active: ActivatedRoute) { }
  id: any
  cdata: any
  ngOnInit() {
    this.id = this._active.snapshot.paramMap.get("id")
    this.editcate.getCategorybyid(this.id).subscribe((data) => {
      this.cdata = data
    })
  }

  
  editcategory(data: any) {

    this.id = this._active.snapshot.paramMap.get("id")
    this.editcate.editCategory(this.id, data).subscribe(() => {
      
      alert('Category Has Been Edited')

    })

  }

}
