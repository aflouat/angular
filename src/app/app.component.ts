import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'blog-aflouat';
  posts = [ 
    {
      title: 'Nouvel an',
      content: 'Espérons que cette nouvelle année sera pleine de réussite',
      lovelts:9,
      created_at:new Date()
    },
    {
      title: 'Fin de 2018',
      content: 'c\'était une année pleine de défis' ,
      lovelts:-3,
      created_at:new Date()
    },
    {
      title: 'Programme du nouvel an',
      content: 'gardons le focus sur nos objectifs, changeons notre vue pour le mieux, donnons '
      +'pour recevoir, partagons pour confirmer notre solidarite avec les plus demunis' ,
      lovelts:-3,
      created_at:new Date()
    }
     
  ];


}
