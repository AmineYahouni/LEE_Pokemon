import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPokemonComponent } from './pokemons/list-pokemon/list-pokemon.component';
import {FormsModule} from '@angular/forms';
import { BorderCardDirective } from './shared/directives/border-card.directive';
import { PokemonTypeColorPipe } from './shared/pipes/pokemon-type-color.pipe';
import { DetailPokemonComponent } from './pokemons/detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    DetailPokemonComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
