import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SinglePokemonComponent} from "./single-pokemon/single-pokemon.component";
import {CardComponent} from "./card/card.component";

export const routes: Routes = [
    {path: 'card', component: CardComponent},
    { path: 'single-pokemon/:name', component: SinglePokemonComponent }, // Route dynamique pour les détails du Pokémon
    {path: 'login', component: LoginComponent},
  ];