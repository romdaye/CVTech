import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Personne } from './../Model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne = new Personne();

  @Output() selectPersonne = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  selectItem(): void {
    this.selectPersonne.emit(this.personne);
  }
}
