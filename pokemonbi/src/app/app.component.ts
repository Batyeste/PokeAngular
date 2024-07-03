import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'; 
import { FooterComponent } from './footer/footer.component'; 
import { CardComponent } from './card/card.component'; 
import { PokemonComponent } from './pokemon/pokemon.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CardComponent, PokemonComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pokemonbi';
}