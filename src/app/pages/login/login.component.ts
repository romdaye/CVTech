import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public toastr: ToastrService) {}

  ngOnInit(): void {
    this.toastr.success('Bienvenu dans le login');
  }
}
