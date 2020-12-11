import { Injectable } from '@angular/core';
import {Pokemon} from '../pokemon';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }
  private pokemonUrl = 'api/pokemons';

  getListPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonUrl).pipe(
      tap(_ => console.log('fetched pokemon')),
      catchError(this.handleError('getListPokemons', []))
    );
  }

  getSinglePokemon(id: number): Observable<Pokemon> {
    /*const listPkm = this.getListPokemons();

    for (let i = 0; i < listPkm.length; i++) {
      if (id === listPkm[i].id)  {
        return listPkm[i];
      }
    }*/

    const url = `${this.pokemonUrl}/${id}`;

    return this.http.get<Pokemon>(url).pipe(
    tap(_ => console.log(`Fetched Pokemon id= ${id}`)),
    catchError(this.handleError<Pokemon>(`Get pokemon id=${id}`))
    );
  }

  getPokemonTypes(): string[] {
    return ['Plante', 'Feu', 'Eau', 'Inspect', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol'];
  }

  // tslint:disable-next-line:typedef
  private handleError<T>(operation= 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}` );

      return of (result as T);
    };
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };
    return this.http.put(this.pokemonUrl, pokemon, httpOptions).pipe(
      tap(_ => console.log(`Update Pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>('update Pokemon'))
    );
  }

  searchPokemons(term: string): Observable<Pokemon[]> {

    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<Pokemon[]>(`${this.pokemonUrl}/?name=${term}`).pipe(

      tap(_ => console.log(`Pokemon correspandant a "${term}" retrouvé`)),
      catchError(this.handleError<Pokemon[]>(`searchPokemons`, []))

    );

  }
}
