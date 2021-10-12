import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Character } from '../character';

export class character {
  constructor (
    public id: number,
    public name: string,
    public status: string,
    public species: string,
    public gender: string,
    public image: string
  ) {}
}

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character : Character[];

  constructor( private httpClient : HttpClient) { }

  ngOnInit(): void {

    // getCharacter() {
    //   this.httpClient.get<any>( url '').subscribe(
    //     next:
    //   );
    // }

  }

}
