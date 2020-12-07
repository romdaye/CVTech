import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testngclass',
  templateUrl: './testngclass.component.html',
  styleUrls: ['./testngclass.component.css'],
})
export class TestngclassComponent implements OnInit {
  show = true;
  constructor() {}

  ngOnInit(): void {}
  changeClass() {
    this.show = !this.show;
  }
}
