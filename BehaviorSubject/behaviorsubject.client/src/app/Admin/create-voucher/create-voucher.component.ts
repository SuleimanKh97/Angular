import { Component } from '@angular/core';
import { VoucherService } from '../../Services/voucher.service';

@Component({
  selector: 'app-create-voucher',
  templateUrl: './create-voucher.component.html',
  styleUrl: './create-voucher.component.css'
})
export class CreateVoucherComponent {

  constructor(private vo: VoucherService) { }


  ngOnInit() { }


  addvouchers(data: any) {

    this.vo.postvoucher(data).subscribe(() => {
      alert('New Voucher Has Been Added')
    })

  }


}
