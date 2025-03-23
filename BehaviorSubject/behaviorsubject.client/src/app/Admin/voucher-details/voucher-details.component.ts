import { Component } from '@angular/core';
import { VoucherService } from '../../Services/voucher.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-voucher-details',
  templateUrl: './voucher-details.component.html',
  styleUrl: './voucher-details.component.css'
})
export class VoucherDetailsComponent {
  constructor(private vo: VoucherService, private _active: ActivatedRoute) { }

  voucherDetails: any
  ngOnInit() {
    let id = this._active.snapshot.paramMap.get('id')
    this.vo.getvoucherbyid(id).subscribe((data) => {
      this.voucherDetails = data
    })



  }



}
