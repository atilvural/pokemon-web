import {Pokemon} from "./pokemon";

export class GetPokemonsResponse {
  totalPage: number;
  curPage: number;
  pokemons: Array<Pokemon>;

  constructor(totalPage: number, curPage: number, pokemons: Array<Pokemon>) {
    this.totalPage = totalPage;
    this.curPage = curPage;
    this.pokemons = pokemons;
  }
}
