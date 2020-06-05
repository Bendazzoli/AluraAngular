import { Component } from '@angular/core';
import { UserSerice } from '../user/user.service';
import { Observable } from 'rxjs';
import { User } from '../user/user';

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{

    user$: Observable<User>;
    user: User;

    constructor(userService: UserSerice){
        this.user$ = userService.getUser();
        this.user$.subscribe(user => {
            this.user = user;
        });
    }
}