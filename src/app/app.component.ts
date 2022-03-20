import {Component, ViewChild} from '@angular/core';
import {PokemonService} from "./service/pokemon-service";
import {GetPokemonsResponse} from "./model/get-pokemons-response";
import {MatTableDataSource} from "@angular/material/table";
import {Pokemon} from "./model/pokemon";
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon-web';
  page: number = 1;
  result!: GetPokemonsResponse;

  //Table Related
  dataSource!: MatTableDataSource<Pokemon>;
  pokemons!: Array<Pokemon>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  pageEvent!: PageEvent;
  pageIndex!:number;
  pageSize!:number;
  length!:number;
  pageSizes = [15];

  displayedColumns: string[] = ['Id',
    'Name',
    'Height',
    'Weight',
    'Moves',
    'Types'
  ];

  constructor(private pokemonService: PokemonService) {
    this.dataSource = new MatTableDataSource<Pokemon>();
    this.dataSource.paginator = this.paginator;
    this.getPokemons(1, 15);
  }

  private getPokemons(page: number, pageSize: number){
    this.pokemonService.getPokemons(pageSize, page).subscribe(response => {
      this.result = response;

      this.dataSource.data = this.result.pokemons;

      this.pageIndex = response.curPage - 1;
      this.length = response.totalPage * response.pokemons.length;

    })
  }

  public changePage(event?:PageEvent){
    this.getPokemons(this.paginator.pageIndex + 1, this.paginator.pageSize);
  }
}
