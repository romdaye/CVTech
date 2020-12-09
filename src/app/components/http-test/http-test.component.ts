import { Component, OnInit } from '@angular/core';
import { HttpTestService } from './../../services/http-test.service';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css'],
})
export class HttpTestComponent implements OnInit {
  constructor(private httpTestService: HttpTestService) {}

  ngOnInit(): void {
    this.httpTestService
      .getPosts()
      .subscribe((posts) => console.log('list des posts', posts));
  }

  sendPost() {
    const post = {
      userId: 1,
      title: 'mon post',
      body: 'contenu de mon post',
    };
    this.httpTestService.addPost(post).subscribe((data) => console.log(data));
  }
}
