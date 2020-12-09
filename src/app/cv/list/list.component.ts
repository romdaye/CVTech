import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Personne } from './../Model/personne';
import { CvService } from './../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personnes: Personne[] = [];
  constructor(private cvService: CvService) {}
  @Output() forwardSelectedPersonne = new EventEmitter();
  ngOnInit(): void {
    this.cvService.getPersonnesListe().subscribe(
      (personnesDansLaBase) => {
        this.personnes = personnesDansLaBase;
      },
      (erreur) => {
        this.personnes = this.cvService.getFakePersonnesListe();
        alert('Problème de connexion, les données fictives');
      }
    );
  }

  forwardPersonne(personne: Personne) {
    this.forwardSelectedPersonne.emit(personne);
  }
}
