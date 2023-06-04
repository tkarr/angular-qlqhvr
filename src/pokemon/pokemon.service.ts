import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private currentPokemon: Subject<Pokemon>;

  constructor(private http: HttpClient) {
    this.currentPokemon = new Subject();
  }

  public getDetails(name: string): Observable<any> {
    return this.http.get(this.baseUrl + name);
  }

  public setCurrent(pokemon: Pokemon) {
    this.currentPokemon.next(pokemon);
  }

  public getCurrentPokemon(): Observable<Pokemon> {
    return this.currentPokemon.asObservable();
  }
}
