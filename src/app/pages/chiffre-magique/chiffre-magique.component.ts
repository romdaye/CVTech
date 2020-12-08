import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chiffre-magique',
  templateUrl: './chiffre-magique.component.html',
  styleUrls: ['./chiffre-magique.component.css'],
})
export class ChiffreMagiqueComponent implements OnInit {
  nombreMagique;
  tentative;
  message = 'Veuillez entamer le jeu';
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.nombreMagique = Math.ceil(Math.random() * 50);
    console.log(this.nombreMagique);
  }

  play() {
    if(this.tentative > this.nombreMagique) {
      this.message = 'Dommage le nombre est plus petit';
    } else if (this.tentative < this.nombreMagique) {
      this.message = 'Dommage le nombre est plus grand';
    } else {
      this.router.navigate(['cv']);
    }
  }
}
