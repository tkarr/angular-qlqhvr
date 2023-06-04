import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PokemonCardComponent],
  exports: [PokemonCardComponent],
})
export class PokemonModule {}
