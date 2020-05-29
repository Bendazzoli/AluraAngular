import { Component } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {
    description = 'GuitarraPuzzle';
    url = 'https://i.pinimg.com/originals/36/ec/bd/36ecbdfd29044348d3cc359a40652829.jpg';
}