import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { User } from './models/user.model'
import { UsersService } from './users/users.service'

@Component({
  selector: 'dac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'The Dating App'

  users$: Observable<User[]>

  constructor(private usersService: UsersService) {
    this.users$ = this.usersService.users$
  }

  ngOnInit(): void {
    this.usersService.fetchUsers$().subscribe()
  }
}
