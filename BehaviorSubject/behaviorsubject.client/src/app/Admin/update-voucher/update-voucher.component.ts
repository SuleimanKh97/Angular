import { Component } from '@angular/core';
import { VoucherService } from '../../Services/voucher.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-voucher',
  templateUrl: './update-voucher.component.html',
  styleUrl: './update-voucher.component.css'
})
export class UpdateVoucherComponent {


  constructor(private vo: VoucherService, private _active: ActivatedRoute) { }


  id: any
  voucherdata: any
  ngOnInit() {
    this.id = this._active.snapshot.paramMap.get('id')
    this.vo.getvoucherbyid(this.id).subscribe((data) => {
      this.voucherdata = data
    })

  }


  editvouchers(data: any) {
    this.id = this._active.snapshot.paramMap.get('id')

    this.vo.updatevoucher(this.id, data).subscribe(() => {
      alert('Voucher Data Has Been Updated')
    })

  }


}
