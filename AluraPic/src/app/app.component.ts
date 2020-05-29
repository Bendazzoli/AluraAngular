import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Sultan_the_Barbary_Lion.jpg/440px-Sultan_the_Barbary_Lion.jpg',
      description: 'Leão'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Lioness_Etosha_NP.jpg/500px-Lioness_Etosha_NP.jpg',
      description: 'Leoa'
    },
    {
      url:'https://www.oeco.org.br/wp-content/uploads/2019/02/black-panter-San-Diego-Zoo.jpg',
      description: 'Pantera'
    },
    {
      url:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Panthera_tigris_corbetti_%28Tierpark_Berlin%29_832-714-%28118%29.jpg/220px-Panthera_tigris_corbetti_%28Tierpark_Berlin%29_832-714-%28118%29.jpg',
      description: 'Tigre'
    }
  ];

}
