import {Component, HostListener, OnInit} from '@angular/core';
import {Pokemon} from '../../pokemon';
import {Router} from '@angular/router';
import {PokemonsService} from '../pokemons.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {
  pokemons: Pokemon[];
  constructor(private router: Router, private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    //this.pokemons = this.pokemonsService.getListPokemons();

    this.pokemonsService.getListPokemons()
      .subscribe( listPkm => this.pokemons = listPkm);
  }

  selectPokemon(pokemon: Pokemon): void {
    alert('vous avez selectioné : ' + pokemon.name);
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
}

}
