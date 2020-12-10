import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../../pokemon';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {

  constructor(private router: Router) { }
  types: Array<string>;
  @Input() pokemon: Pokemon;
  ngOnInit(): void {
  }

}
