import { Component } from '@angular/core';
import { ProductService } from '../../Service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  standalone: false,
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.css'
})
export class EditproductComponent {
  constructor(private editpro: ProductService, private _active: ActivatedRoute) { }
  id: any
  pdata: any
  prodata: any
  ngOnInit() {
    this.id = this._active.snapshot.paramMap.get('id')
    this.editpro.getProductbyid(this.id).subscribe((data) => {
      this.pdata = data
    })
    this.editpro.getCategory().subscribe((data) => {
      this.prodata = data
    })

  }




  editproduct(data: any) {
    this.id = this._active.snapshot.paramMap.get('id')
    this.editpro.editProduct(this.id, data).subscribe(() => {
      alert('Product Detail Has Been Edited')
    })
  }
}
