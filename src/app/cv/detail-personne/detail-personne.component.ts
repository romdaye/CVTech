import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private router: Router,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (mesParametres) => {
        this.cvService.findPersonneById(+mesParametres.id).subscribe(
          (findedPersonne) => (this.personne = findedPersonne),
          (erreur) => this.router.navigate(['cv'])
        );
      },
      (erreur) => console.log(erreur),
      () => console.log('on a terminé')
    );
  }

  deletePersonne() {
    this.cvService.deletePersonne(this.personne.id).subscribe(
      (data) => {
        this.toaster.success('Cv supprimé avec succées');
        this.router.navigate(['cv']);
      },
      (erreur) => {
        this.toaster.error('Problème de suppression');
        console.log(erreur);
      }
    );
  }
}
