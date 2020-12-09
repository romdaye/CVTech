import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from './../Model/personne';

const API_PERSONNE_LINK =
  'https://immense-citadel-91115.herokuapp.com/api/personnes';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private personnes: Personne[] = [];
  constructor(private http: HttpClient) {
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
  getFakePersonnesListe(): Personne[] {
    return this.personnes;
  }

  getPersonnesListe(): Observable<Personne[]> {
    return this.http.get<Personne[]>(API_PERSONNE_LINK);
  }

  findFakePersonneById(id: number): Personne {
    return this.personnes.find((personne) => personne.id === id);
  }

  findPersonneById(id: number): Observable<Personne> {
    return this.http.get<Personne>(API_PERSONNE_LINK + id);
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
