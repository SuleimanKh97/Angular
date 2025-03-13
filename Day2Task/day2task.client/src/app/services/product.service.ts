import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  getProduct() {
    return this._http.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories")
  }

  getProductbyCategoryId() {
    return this._http.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products")
  }

  getProductDetails(id: any) {
    return this._http.get<any>(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`)
  }
}
