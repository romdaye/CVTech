import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from './../Model/personne';
import { CvService } from './../services/cv.service';

@Component({
  selector: 'app-detail-personne',
  templateUrl: './detail-personne.component.html',
  styleUrls: ['./detail-personne.component.css'],
})
export class DetailPersonneComponent implements OnInit {
  personne: Personne = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((mesParametres) => {
      const findedPersonne = this.cvService.findPersonneById(+mesParametres.id);
      if (!findedPersonne) {
        console.log('personne innexistate');
        this.router.navigate(['cv']);
      } else {
        this.personne = findedPersonne;
      }
    });
  }

  deletePersonne() {
    if (this.cvService.deletePersonne(this.personne)) {
      this.router.navigate(['cv']);
    } else {
      alert('Problème de suppression');
    }
  }
}
