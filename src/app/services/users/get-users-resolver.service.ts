import { Injectable } from '@angular/core';
import { GetUsersService } from './get-users.service';
import { Users } from '../Users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUsersResolverService {

  constructor(
    private gus: GetUsersService
  ) { }

  resolve(): Observable<Users[]> {
    return this.gus.obtenerUsers();
  }

}
