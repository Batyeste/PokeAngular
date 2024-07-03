import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../service/list.service';
import { Pokemon } from '../interface/pokemon';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-single-pokemon',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    NgIf,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './single-pokemon.component.html',
  styleUrl: './single-pokemon.component.scss'
})
export class SinglePokemonComponent implements OnInit {
  pokemon$: Observable<Pokemon> | undefined = undefined;

  loading = false;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private listService: ListService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const name = params['name'];
      if (name) {
        this.loadPokemonDetails(name);
      }
    });
  }
  

  async loadPokemonDetails(name: string) {
    try {
      this.loading = true;
      this.error = false;
  
      const pokemonDetails = await this.listService.getPokemonSoloAsync(name);
      
      // Convertir la Promise en Observable avant de l'assigner à pokemon$
      this.pokemon$ = from(this.listService.getPokemonSoloAsync(name));
  
      console.log('Détails du Pokémon:', pokemonDetails);
    } catch (error) {
      console.error('Erreur lors du chargement des détails du Pokémon:', error);
      this.error = true;
    } finally {
      this.loading = false;
    }
  }
  
  
}
