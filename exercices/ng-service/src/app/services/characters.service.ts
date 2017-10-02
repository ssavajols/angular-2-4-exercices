import { CHARACTERS } from './../classes/data-characters';
import { Character } from './../classes/character';
import { Injectable } from '@angular/core';

@Injectable()
export class CharactersService {

  constructor() { }

  getCharacters(): Promise<Character[]> {
    return Promise.resolve(CHARACTERS);
  }

}
