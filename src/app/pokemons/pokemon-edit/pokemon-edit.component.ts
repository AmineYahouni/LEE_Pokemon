import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../pokemon';
import {ActivatedRoute} from '@angular/router';
import {PokemonsService} from '../pokemons.service';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.scss']
})
export class PokemonEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private pokemonsService: PokemonsService) { }
  singlePokemon: Pokemon = null ;
  ngOnInit(): void {

    const id = +this.route.snapshot.paramMap.get('id');
    //this.singlePokemon = this.pokemonsService.getSinglePokemon(id);
    this.pokemonsService.getSinglePokemon(id)
      .subscribe( pkm => this.singlePokemon = pkm);
  }

}
