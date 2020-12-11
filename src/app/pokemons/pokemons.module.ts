import { NgModule } from '@angular/core';
import {ListPokemonComponent} from './list-pokemon/list-pokemon.component';
import {DetailPokemonComponent} from './detail-pokemon/detail-pokemon.component';
import {BrowserModule} from '@angular/platform-browser';
import {BorderCardDirective} from '../shared/directives/border-card.directive';
import {PokemonTypeColorPipe} from '../shared/pipes/pokemon-type-color.pipe';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import {FormsModule} from '@angular/forms';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from '../shared/in-memory-data.service';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';



@NgModule({
  declarations: [
    ListPokemonComponent,
    SearchPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    PokemonEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    FormsModule
  ]
})
export class PokemonsModule { }
