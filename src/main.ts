import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { PokemonModule } from './pokemon/pokemon/pokemon.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, PokemonModule, HttpClientModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <app-pokemon-card></app-pokemon-card>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
