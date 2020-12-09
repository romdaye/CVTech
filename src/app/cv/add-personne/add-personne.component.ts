import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CvService } from './../services/cv.service';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css'],
})
export class AddPersonneComponent implements OnInit {
  constructor(
    private cvService: CvService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {}

  addPersonne(addPersonneformulaire: NgForm) {
    this.cvService.addPersonne(addPersonneformulaire.value).subscribe(
      (addPersonne) => {
        this.toaster.success('Personne ajoutée avec succès');
        this.router.navigate(['cv']);
      },
      (erreur) => {
        this.toaster.error('Problème d ajout');
        console.log(erreur);
      }
    );
  }
}
