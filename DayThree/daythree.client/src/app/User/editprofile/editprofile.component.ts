import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  standalone: false,
  templateUrl: './editprofile.component.html',
  styleUrl: './editprofile.component.css'
})
export class EditprofileComponent {
  @Input() item1 = ''; // decorate the property with @Input()
  @Output() edit = new EventEmitter<string>();
  @Input() userInfo!: { name: string; email: string; age: number };
  editp(value: string) {
    this.edit.emit(value)
  }

}
