import {Injectable} from '@angular/core';
import {User} from '../../models/user.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

// Injectable omogucava dependancy injection https://angular.io/guide/dependency-injection
// providedIn oznacava na kom nivou ce biti dostupna instanca ovog servisa
// 'root' znaci da je UserService singleton na nivou cele aplikacije
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly usersUrl = 'http://localhost:8080/users';
  private authorization = 'Bearer ' + localStorage.getItem('jwt');
  private users: Observable<User[]>;

  constructor(private http: HttpClient) {

  }

  public getUsers(): Observable<User[]> {
    return this.users;
  }

  public fetchUsers(): Observable<User[]> {
    this.users = this.http.get<User[]>(this.usersUrl, {
      params: {}, headers: {
        Authorization: this.authorization
      }
    });
    return this.users;
  }

  public removeUser(id: number): Observable<User> {
    let user: Observable<User> = this.http.delete<User>(this.usersUrl + '/' + id, {
      params: {}, headers: {
        Authorization: this.authorization
      }
    });
    console.log('http DELETE id=' + id);
    return user;
  }

  public updateUser(credentials): Observable<User> {
    let user: Observable<User> = this.http.put<User>(this.usersUrl, {
      'id': credentials.userId,
      'firstName': credentials.userFirstName,
      'lastName': credentials.userLastName
    }, {
      headers: {
        Authorization: this.authorization
      }
    });
    return user;
  }

  public addUser(credentials): Observable<User> {
    let user: Observable<User> = this.http.post<User>(this.usersUrl, {
      'id': Math.floor(Math.random() * 1000),
      'firstName': credentials.userFirstName,
      'lastName': credentials.userLastName
    }, {
      headers: {
        Authorization: this.authorization
      }
    });
    return user;
  }

}
