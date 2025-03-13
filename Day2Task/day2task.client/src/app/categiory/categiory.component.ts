import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-categiory',
  standalone: false,
  templateUrl: './categiory.component.html',
  styleUrl: './categiory.component.css'
})
export class CategioryComponent {
  constructor(private _cata: ProductService) { }

  ngOnInit() {
    this.getcategory();
  }
  categorylist: any[] = [];

  getcategory() {
    this._cata.getProduct().subscribe((data: any[]) => {
      this.categorylist = data;
    }
    );
  }

}
