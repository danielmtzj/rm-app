import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  async getCharacters(): Promise<any[]> {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const data = await res.json();
    return data.results;
  }
  async getCharacter(id: number): Promise<any> {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    return await res.json();
  }
}
