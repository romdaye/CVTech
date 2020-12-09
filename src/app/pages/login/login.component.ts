import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    public toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.toastr.success('Bienvenu dans le login');
  }

  login(formulaire: NgForm) {
    this.authService.login(formulaire.value).subscribe(
      (data) => {
        localStorage.setItem('token', data.id);
        this.toastr.success('Bienvenu dans votre compte');
        this.router.navigate(['cv']);
      },
      (erreur) => this.toastr.error('Veuillez vérifier vos credentials')
    );
  }
}
