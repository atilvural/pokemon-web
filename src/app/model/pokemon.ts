export class Pokemon {
  id: number;
  name: string;
  moves: string;
  types: string;
  height: number;
  weight: number;

  constructor(id: number, name: string, moves: string, types: string, height: number, weight: number) {
    this.id = id;
    this.name = name;
    this.moves = moves;
    this.types = types;
    this.height = height;
    this.weight = weight;
  }
}
