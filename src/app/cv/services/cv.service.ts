import { Injectable } from '@angular/core';
import { Personne } from './../Model/personne';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private personnes: Personne[] = [];
  constructor() {
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
  getPersonnesListe(): Personne[] {
    return this.personnes;
  }
}
