import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoucherService {

  constructor(private _http: HttpClient) { }

  getallvoucher() {
    return this._http.get('https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher')
  }

  postvoucher(data: any) {
    return this._http.post('https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher', data)
  }

  updatevoucher(id: any, data: any) {
    return this._http.put(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${id}`, data)
  }

  getvoucherbyid(id: any) {
    return this._http.get(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${id}`)

  }

  deletevoucher(id: any) {
    return this._http.delete(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${id}`)
  }

}
