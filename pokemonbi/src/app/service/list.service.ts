import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { List } from '../interface/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private pokemon: List[] = [];

  constructor(private http: HttpClient) { }

  getList(): Observable<List> {
    return this.http.get<List>('https://pokeapi.co/api/v2/pokemon');
  }

  async getListAsync() {
    try {
      const req = await fetch('https://pokeapi.co/api/v2/pokemon');
      if (req.ok) {
        return await req.json();
      }
      return false;
    } catch (err) {
      console.log(err);
      throw new Error('Error getting Pokemon from API');
    }
  }

  getListByName(name: string): any {
    for (const list of this.pokemon) {
      const foundPokemon = list.results.find(pokemon => pokemon.name === name);
      if (foundPokemon) {
        return foundPokemon;
      }
    }
    throw new Error('Pokemon not found!');
  }  
}
