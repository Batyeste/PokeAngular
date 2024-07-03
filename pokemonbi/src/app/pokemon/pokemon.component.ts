import {Component, OnInit} from '@angular/core';
import { PokemonService } from '../service/pokemon.service';
import { Pokemon } from '../interface/pokemon';
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent implements OnInit{
  pokemons: Pokemon[] = [];

  pokemons$!: Observable<Pokemon[]>;
  pokemon: Promise<any> | undefined

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemons$ = this.pokemonService.getPokemon();
    this.pokemon = this.pokemonService.getPokemonAsync()
    }
}


