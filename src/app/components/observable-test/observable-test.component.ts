import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.css'],
})
export class ObservableTestComponent implements OnInit {
  observable: Observable<number>;
  constructor() {}
  /*   value; */
  ngOnInit(): void {
    this.observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    /*     this.observable.subscribe((valeur) => this.value = valeur) */
    this.observable.subscribe((val) => {
      console.log(val);
    });
    /*
    this.observable.subscribe((compteur) => {
      console.log('l observable m a envoyé ca', compteur);
    },
    (erreur) => console.log('erreur'),
    () => console.log('il a terminé'),
    ); */
  }
}
