import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnChanges {
  @Input() product: any;
  @Input() quantity: number = 1;
  totalPrice: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['quantity']) {
      this.totalPrice = this.quantity * this.product.price;
    }
  }
  updateQuantity(): void {
    this.totalPrice = this.quantity * this.product.price;
  }

}
