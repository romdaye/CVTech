import { Component, OnInit } from '@angular/core';
import { Personne } from './../Model/personne';
import { LoggerService } from './../../services/logger.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne = new Personne();
  date = new Date();
  constructor(private loggerService: LoggerService) {}

  ngOnInit(): void {
    this.loggerService.log('Je suis dans cv Component');
    this.loggerService.log('cc');
  }
  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
}
