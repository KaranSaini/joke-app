import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Joke } from '../Joke';
import { pluck, catchError, retry, shareReplay, timeout } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeApiService {
  defaultUrl = `https://sv443.net/jokeapi/v2/joke/Programming?
    type=single&blacklistFlags=nsfw,religious,political,racist,sexist&format=json`;

  retrieveDefault(): Observable<string> {
    return this.httpClient.get<string>(this.defaultUrl).pipe(
      timeout(2500),
      retry(3),
      catchError(() => {
        return EMPTY;
      }),
      shareReplay()
    );
  }

  constructor(private httpClient: HttpClient) {
     
  }
}
