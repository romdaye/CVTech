import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  name = 'sellaouti';
  firstname = 'aymen';
  isHidden = false;
  color = 'blue';

  message = '';
  constructor() {}

  ngOnInit(): void {}
  changeColor() {
    this.color = 'red';
  }
  afficherCacher() {
    this.isHidden = !this.isHidden;
  }
  changeMessage(valeurInput: string) {
    this.message = valeurInput;
  }
}
