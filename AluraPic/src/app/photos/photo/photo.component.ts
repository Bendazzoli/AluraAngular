import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {
    //São uma propriedade inbound:
    // aceitam receber um valor através da sua forma declarativa
    @Input() description = '';
    @Input() url = '';
}