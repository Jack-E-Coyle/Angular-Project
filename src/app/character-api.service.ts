import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CharacterApiService {
  apiURL: string = 'https://rickandmortyapi.com/api/character/1';
  constructor(private httpClient: HttpClient) { }
  ngOnInit
  {
    this.httpClient.
  }
}
