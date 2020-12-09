import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from './../Model/personne';

const API_PERSONNE_LINK =
  'https://immense-citadel-91115.herokuapp.com/api/personnes/';

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

  deleteFakePersonne(deletedPersonne: Personne): number {
    const index = this.personnes.indexOf(deletedPersonne);
    if (index === -1) {
      return 0;
    } else {
      this.personnes.splice(index, 1);
      return 1;
    }
  }

  deletePersonne(id): Observable<unknown> {
    // Ceci est le token qu'on a caché dans le local storage
    const tokenRecupere = localStorage.getItem('token');
    // Créer un header de name Authorization  et on y met le token
    const headers = new HttpHeaders().set('Authorization', tokenRecupere);
    //On envoi la requete avec le header qu'on vient de créer
    return this.http.delete<unknown>(API_PERSONNE_LINK + id, { headers });
  }

  addPersonne(personneToAdd: Personne): Observable<Personne> {
    // Ceci est le token qu'on a caché dans le local storage
    const tokenRecupere = localStorage.getItem('token');
    // Créer un header de name Authorization  et on y met le token
    const headers = new HttpHeaders().set('Authorization', tokenRecupere);

    return this.http.post<Personne>(API_PERSONNE_LINK, personneToAdd, {
      headers,
    });
  }
}
