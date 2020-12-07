import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css'],
})
export class TwoWayComponent implements OnInit {
  two = 'valeur initale';
  constructor() {}

  ngOnInit(): void {}

  changeTwoValue() {
    this.two = 'quelque chose';
  }
}
