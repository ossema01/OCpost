import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OCpost';
  d = new Date();
  posts = [
    {
      titre : 'First post',
      contenu : 'content of first post',
      date : this.d

    },{
      titre : 'second post',
      contenu : 'content of second post',
      date : this.d
    },{
      titre : 'third post',
      contenu : 'content of third post',
      date : this.d
    }
  ];
}
