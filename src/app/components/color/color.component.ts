import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  defaultColor = 'yellow';
  color: string;
  constructor() {}

  ngOnInit(): void {
    this.color = this.defaultColor;
  }

  changeColor(newColor: string): void {
    this.color = newColor;
  }

  resetColor() {
    this.color = this.defaultColor;
  }
}
