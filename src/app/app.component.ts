import { Component } from '@angular/core';
declare const toggle: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';
  show() {
    toggle();
  }
  constructor() {}
  ngOnInit(): void {}
}
