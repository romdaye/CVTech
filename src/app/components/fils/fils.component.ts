import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  @Input() message = 'message du fils';
  @Input() name = 'fils';
  @Input() bgc = 'red';

  //fils (message = 'message du fils', name= 'name', bgc='red');
  constructor() {}

  ngOnInit(): void {}
}
