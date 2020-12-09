import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Pokemon} from '../../pokemon';
import {POKEMONS} from '../../shared/list.pokemons';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    this.listOfPokemons = POKEMONS;
  }

  listOfPokemons: Pokemon[] = null;
  pokemonToDisplay: Pokemon = null;
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    for (let i = 0; i < this.listOfPokemons.length; i++){
      if (this.listOfPokemons[i].id === id) {
        this.pokemonToDisplay = this.listOfPokemons[i];
      }
    }
    console.log(this.pokemonToDisplay);
  }

  OnClickRetour(): void{
    const link = ['/pokemon'];
    this.router.navigate(link);
  }
}