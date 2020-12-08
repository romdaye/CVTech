import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Personne } from './../Model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personnes: Personne[] = [];
  constructor() {}
  @Output() forwardSelectedPersonne = new EventEmitter();
  ngOnInit(): void {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 38, 45879),
      new Personne(
        2,
        'Crammard',
        'Carolyn',
        'Developper',
        '        ',
        20,
        125435
      ),
      new Personne(3, 'Molinier', 'Christophe', 'Developper', '', 20, 548752),
    ];
  }

  forwardPersonne(personne: Personne) {
    this.forwardSelectedPersonne.emit(personne);
  }
}
