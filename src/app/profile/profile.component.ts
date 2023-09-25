import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  title = 'Profile';
  display = false;
  gallery = false;
  show() {
    this.display = !this.display;
  }
  image() {
    this.gallery = !this.gallery;
  }
}
