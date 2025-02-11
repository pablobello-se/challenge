import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { USERS_URI } from '../constants/url';
import { IUser } from '../models/user.model';


@Injectable({
    providedIn: 'root',
})
export class UserService {

    constructor(private http: HttpClient) { }

    getUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>(USERS_URI)
        .pipe(
            tap(users => console.log(users)),
            map((users) =>
                users.map((user: IUser) => ({ id: user.id, name: user.name, email: user.email }))
            )
        );
    }
}
