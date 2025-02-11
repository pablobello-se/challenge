import { Component, Input } from '@angular/core';
import { IUser } from '../../models/user.model';

@Component({
    selector: 'app-user-card',
    imports: [],
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss'
})
export class UserCardComponent {

    @Input() user!: IUser

}
