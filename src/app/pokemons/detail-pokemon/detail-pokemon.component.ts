import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Pokemon} from '../../pokemon';
import {POKEMONS} from '../../shared/list.pokemons';
import {PokemonsService} from '../pokemons.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonsService) {
    // this.listOfPokemons = this.pokemonsService.getListPokemons();
  }
  status: string;
  private pokemonUrl = 'api/pokemons';

  // listOfPokemons: Pokemon[] = null;
  pokemonToDisplay: Pokemon = null;
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
   /* for (let i = 0; i < this.listOfPokemons.length; i++){
      if (this.listOfPokemons[i].id === id) {
        this.pokemonToDisplay = this.listOfPokemons[i];
      }
    }*/
  // this.pokemonToDisplay = this.pokemonsService.getSinglePokemon(id);
    this.pokemonsService.getSinglePokemon(id)
      .subscribe(pkm => this.pokemonToDisplay = pkm);
    console.log(this.pokemonToDisplay);
  }

  OnClickRetour(): void{
    const link = ['/pokemon'];
    this.router.navigate(link);
  }
  OnClickEdit(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    const link = ['/pokemon',  'edit', id];
    this.router.navigate(link);
  }
  OnClickDel(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    const url = `${this.pokemonUrl}/${id}`;
    this.http.delete(url)
      .subscribe(() => alert(`Le pokémon a été supprimé !`));
    const link = ['/pokemon'];
    this.router.navigate(link);
  }
}
