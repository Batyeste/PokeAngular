import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { List } from '../interface/list';
import { Pokemon } from '../interface/pokemon';

@Injectable({
    providedIn: 'root'
})
export class ListService {
    constructor(private http: HttpClient) { }

    getList(): Observable<List> {
        return this.http.get<List>('https://pokeapi.co/api/v2/pokemon');
    }
    // this.allList$ = this.listService.getPokemonDetails();

    getPokemonDetails(name: string): Observable<Pokemon> {
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
        console.log("Je reçois pour les détails", apiUrl); 
        return this.http.get<Pokemon>(apiUrl);
    }

    // Ajouter un gestionnaire d'erreurs pour les requêtes HTTP
    private handleError(error: any) {
        console.error('An error occurred:', error);
        throw new Error('Error fetching data from API');
    }

    async getPokemonAsync() {
        try {
            const req = await fetch('https://pokeapi.co/api/v2/pokemon');
            if (req.ok) {
                const data = await req.json();

                console.log("Réponse", data);
                return data;
            }
            return false;
        } catch (err) {
            console.error(err);
            throw new Error('Error getting Pokemon from API');
        }
    }

    async getPokemonSoloAsync(name: string) {
        try {
            const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            if (req.ok) {
                const data = await req.json();

                console.log("Réponse des solo", data);
                return data;
            }
            return false;
        } catch (err) {
            console.error(err);
            throw new Error('Error getting Pokemon from API');
        }
    }
}
