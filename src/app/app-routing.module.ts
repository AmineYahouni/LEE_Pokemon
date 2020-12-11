import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListPokemonComponent} from './pokemons/list-pokemon/list-pokemon.component';
import {DetailPokemonComponent} from './pokemons/detail-pokemon/detail-pokemon.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {PokemonFormComponent} from './pokemons/pokemon-form/pokemon-form.component';
import {PokemonEditComponent} from './pokemons/pokemon-edit/pokemon-edit.component';
import {SearchPokemonComponent} from './pokemons/search-pokemon/search-pokemon.component';

const routes: Routes = [
  {path: 'pokemon', component: ListPokemonComponent},
  {path: 'pokemon/:id', component: DetailPokemonComponent },
  {path: 'pokemon/edit/:id', component: PokemonEditComponent },
  {path: '', redirectTo: 'pokemon', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
