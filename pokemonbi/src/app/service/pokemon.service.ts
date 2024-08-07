// import { Injectable } from '@angular/core';
// import { HttpClient } from "@angular/common/http";
// import { Observable } from "rxjs";
// import { Pokemon } from "../interface/pokemon";

// @Injectable({
//   providedIn: 'root'
// })
// export class PokemonService {
//   private pokemon: Pokemon[] = []

//   constructor(private http: HttpClient) { }

//   getPokemon(): Observable<Pokemon[]> {
//     return this.http.get<Pokemon[]>('https://pokeapi.co/api/v2/pokemon');
//   }

// async getPokemonAsync() {
//   try {
//     const req = await fetch('https://pokeapi.co/api/v2/pokemon');
//     if (req.ok) {
//       const data = await req.json(); 

//       console.log("Réponse", data); 
//       return data;
//     }
//     return false;
//   } catch (err) {
//     console.error(err);
//     throw new Error('Error getting Pokemon from API');
//   }
// }

//   getPokemonByName(name: string): any {
//     const foundPokemon = this.pokemon.find((p: Pokemon) => p.name === name);

//     if (!foundPokemon) throw new Error('Pokemon not found!')
//     return foundPokemon;
//   }

//   getPokemonDetailsByUrl(url: string): Observable<Pokemon> {
//     return this.http.get<Pokemon>(url);
//   }
// }
