import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {PokemonComponent} from "./pokemon/pokemon.component";
import {SinglePokemonComponent} from "./single-pokemon/single-pokemon.component";
import {CardComponent} from "./card/card.component";

export const routes: Routes = [
    // {path: '', component: WelcomeComponent},
    // {path: 'todo-list', component: TodoListComponent},
    // {path: 'todo-list/:id', component: SingleTodoComponent},
    // {path: 'universities', component: UniversitiesComponent},
    // {path: 'universities/:name', component: SingleUniversitiesComponent},
    {path: 'card', component: CardComponent},
    {path: 'pokemon', component: PokemonComponent},
    {path: 'pokemon/:name', component: SinglePokemonComponent},
    {path: 'login', component: LoginComponent},
  ];