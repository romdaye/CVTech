import { Component, Input, OnInit } from '@angular/core';
import { Personne } from './../Model/personne';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() personne: Personne = new Personne();
  constructor() {}

  ngOnInit(): void {}
}
