import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  fname = ' Mohamed';
  nami = 'Ouazourassen';
  message = '';

  pip = 'HELLO MAN ';
  tit = ' tilte case every first word will be capitalized ';
  person ={
    "first" : "Adam",
    "last" : "Ouazou "
  }
   date = new Date();
}
