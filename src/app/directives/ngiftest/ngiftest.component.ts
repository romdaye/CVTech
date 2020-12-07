import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngiftest',
  templateUrl: './ngiftest.component.html',
  styleUrls: ['./ngiftest.component.css'],
})
export class NgiftestComponent implements OnInit {
  show = false;
  message = 'afficher';
  constructor() {}

  ngOnInit(): void {}

  cacherAfficher() {
    this.show = !this.show;
    if (this.message === 'afficher') {
      this.message = 'cacher';
    } else {
      this.message = 'afficher';
    }
  }
}
