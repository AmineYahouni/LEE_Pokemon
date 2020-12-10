import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListPokemonComponent} from './list-pokemon/list-pokemon.component';
import {DetailPokemonComponent} from './detail-pokemon/detail-pokemon.component';
import {BrowserModule} from '@angular/platform-browser';
import {BorderCardDirective} from '../shared/directives/border-card.directive';
import {PokemonTypeColorPipe} from '../shared/pipes/pokemon-type-color.pipe';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';



@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent
  ],
  imports: [
    BrowserModule
  ]
})
export class PokemonsModule { }
