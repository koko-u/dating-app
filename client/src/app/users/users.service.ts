import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user.model'
import { BehaviorSubject, Observable } from 'rxjs'
import { ignoreElements, map, tap } from 'rxjs/operators'

type UserResponse = {
  id: number
  userName: string
}

@Injectable()
export class UsersService {
  private _usersSubject$ = new BehaviorSubject<User[]>([])

  get users$(): Observable<User[]> {
    return this._usersSubject$.asObservable()
  }

  constructor(private http: HttpClient) {}

  fetchUsers$(): Observable<never> {
    return this.http.get<UserResponse[]>('/api/users').pipe(
      tap({ error: (err) => console.log('UsersService#fetchUsers', err) }),
      map((resList) =>
        resList.map((res) => ({ id: res.id, name: res.userName }))
      ),
      tap((users) => this._usersSubject$.next(users)),
      ignoreElements()
    )
  }

  getUserById(id: number): Observable<User> {
    throw new Error('Not yet Implemented')
  }
}
