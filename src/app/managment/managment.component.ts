import { Component } from '@angular/core';

@Component({
  selector: 'app-managment',
  templateUrl: './managment.component.html',
  styleUrls: ['./managment.component.scss'],
})
export class ManagmentComponent {
  title = 'hello';
  display = false;
  show() {
    this.display = !this.display;
  }
}
