import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Joke } from '../Joke';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JokeApiService {
  defaultUrl = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&format=json';

  retrieveDefault() {
    return this.httpClient.get(this.defaultUrl);
  }

  constructor(private httpClient: HttpClient) {
     
  }
}
