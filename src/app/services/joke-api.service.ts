import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Joke } from '../Joke';
import { pluck, catchError, retry, shareReplay, timeout } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class JokeApiService {
  defaultUrl = `https://sv443.net/jokeapi/v2/joke/Programming?type=single&blacklistFlags=nsfw,religious,political,racist,sexist&format=json`;

  retrieveDefault(){
    return this.httpClient.get(this.defaultUrl);
  }

  constructor(private httpClient: HttpClient) {}
}