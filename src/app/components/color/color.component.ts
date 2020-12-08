import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  defaultColor = 'yellow';
  color: string;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.color = this.defaultColor;
    this.activatedRoute.params.subscribe((params) => {
      this.color = params.couleur;
    });
    this.activatedRoute.queryParams.subscribe((qp) => {
      console.log(qp);
    });
  }

  changeColor(newColor: string): void {
    this.color = newColor;
  }

  resetColor() {
    this.color = this.defaultColor;
  }
}
