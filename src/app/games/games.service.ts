import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGames } from './games.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private apiUrl = 'https://api.brchallenges.com/api/blizzard/games';

  constructor(private http: HttpClient) {}

  getGames(): Observable<IGames[]> {
    return this.http.get<IGames[]>(this.apiUrl);
  }
}
