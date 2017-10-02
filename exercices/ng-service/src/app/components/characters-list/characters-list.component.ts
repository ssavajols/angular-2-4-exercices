import { Character } from './../../classes/character';
import { CharactersService } from './../../services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
  providers: [CharactersService]
})
export class CharactersListComponent implements OnInit {

  characters: Character[];

  constructor(private charactersService: CharactersService) { }

  getCharacters(): void {
    this.charactersService.getCharacters().then(characters => this.characters = characters);
  }

  ngOnInit() {
    this.getCharacters();
  }

}
