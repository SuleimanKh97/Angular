import { Component } from '@angular/core';
import { VoucherService } from '../../Services/voucher.service';

@Component({
  selector: 'app-read-voucher',
  templateUrl: './read-voucher.component.html',
  styleUrl: './read-voucher.component.css'
})
export class ReadVoucherComponent {
  constructor(private vo: VoucherService) { }

  ngOnInit() {
    this.getvoucher()
  }
  voucherall: any
  getvoucher() {
    this.vo.getallvoucher().subscribe((d) => {
      this.voucherall = d
    })
  }


}
