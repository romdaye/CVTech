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

  findPersonneById(id: number): Personne {
    return this.personnes.find((personne) => personne.id === id);
  }

  deletePersonne(deletedPersonne: Personne): number {
    const index = this.personnes.indexOf(deletedPersonne);
    if (index === -1) {
      return 0;
    } else {
      this.personnes.splice(index, 1);
      return 1;
    }
  }
}
