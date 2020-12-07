import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css'],
})
export class PereComponent implements OnInit {
  messageDuPere = 'cc fiston est ce que ca va';
  maCouleur = 'pink';
  constructor() {}

  ngOnInit(): void {}
  recupererMessageDeMonFils(msgFils: string) {
    alert(msgFils);
  }
}
