import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
  providers: [PokemonService],
})
export class PokemonCardComponent implements OnInit {
  public currentPokemon: Observable<Pokemon> | undefined;
  @ViewChild('pokemonNameInput')
  pokemonNameInput: ElementRef | undefined;

  constructor(private readonly pokemonService: PokemonService) {}

  ngOnInit() {
    this.currentPokemon = this.pokemonService.getCurrentPokemon();
  }

  public search() {
    const value = this.pokemonNameInput?.nativeElement.value;
    console.log('Searching for ' + value);
    if (value) {
      this.pokemonService
        .getDetails(value)
        .subscribe((pokemon: Pokemon) => console.log(pokemon));
    }
  }
}
