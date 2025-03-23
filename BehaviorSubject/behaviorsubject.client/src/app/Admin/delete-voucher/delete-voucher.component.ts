import { Component } from '@angular/core';
import { VoucherService } from '../../Services/voucher.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-voucher',
  templateUrl: './delete-voucher.component.html',
  styleUrl: './delete-voucher.component.css'
})
export class DeleteVoucherComponent {
  constructor(private vo: VoucherService, private _active: ActivatedRoute) { }

  deletevouchers() {
    let id = this._active.snapshot.paramMap.get('id')
    this.vo.deletevoucher(id).subscribe(() => {
      alert('Voucher Has Been Deleted Sucssisfully')
    })
  }

}
