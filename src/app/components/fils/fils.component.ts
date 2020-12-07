import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  @Input() message = 'message du fils';
  @Input() name = 'fils';
  @Input() bgc = 'red';

  /*
    1- Créer un evenement
    2- Dire quand déclencher l'evenement
    3- Emettre l'evenement et je vais y cacher les datas à envoyer au pere
  */
  @Output() messageFromFils = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  envoyerInfosAuPere() {
    this.messageFromFils.emit(
      'cc Papa c est ton fils'
    );
  }
}
