import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../Users';
import { Observable } from 'rxjs';
import { environment } from 'enviroment';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerUsers(): Observable<Users[]> {
    const endPoint = environment.api.fullUrl + environment.api.apiPath +environment.api.uris.getAllUsers;
    return this.http.get<Users[]>(endPoint);
  }
}
