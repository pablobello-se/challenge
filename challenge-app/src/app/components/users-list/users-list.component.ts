import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IUser } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { SearchComponent } from "../search/search.component";
import { UserCardComponent } from "../user-card/user-card.component";


@Component({
    selector: 'app-users-list',
    imports: [AsyncPipe, SearchComponent, UserCardComponent],
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss'
})
export class UsersListComponent {

    users$: Observable<IUser[]>;
    filteredUsers$: Observable<IUser[]>;

    constructor(private userService: UserService) {
        this.users$ = this.userService.getUsers();
        this.filteredUsers$ = this.users$;
    }

    onSearch(query: string) {
        this.filteredUsers$ = this.users$.pipe(
            map(users => users.filter(user => user.name.toLowerCase().includes(query.toLowerCase())))
        );
    }

}
