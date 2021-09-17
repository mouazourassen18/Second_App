import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  
  <h3>{{pardata}}</h3>
  <h3>{{lname}}</h3>
  <button (click)="firEvent()" > send Event </button>
  `,
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  @Input() pardata;
  @Input('nam') lname;

  @Output() childEvent = new EventEmitter();
  firEvent() {
    this.childEvent.emit('hello  DADY , Iam sending you a message');
  }
  constructor() {}

  ngOnInit() {}
}
