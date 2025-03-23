import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get('https://67cd64b6dd7651e464ee3d63.mockapi.io/products')
  }

  getProductbyid(id: any) {
    return this.http.get(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`)
  }

  getCategory() {
    return this.http.get('https://67cd64b6dd7651e464ee3d63.mockapi.io/categories')
  }
  getCategorybyid(id: any) {
    return this.http.get(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`)
  }
  addProduct(data: any) {
    return this.http.post('https://67cd64b6dd7651e464ee3d63.mockapi.io/products' , data)

  }

  addCategory(data: any) {
    return this.http.post('https://67cd64b6dd7651e464ee3d63.mockapi.io/categories', data)

  }

  editCategory(id: any, data: any) {
    return this.http.put(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`, data)

  }

  editProduct(id: any, data: any) {
    return this.http.put(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`, data)

  }
}
