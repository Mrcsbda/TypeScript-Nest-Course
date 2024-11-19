import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface"
import { HttpAdapter, PokeApiAdapter, PokeApiFetchAdapter } from "../api/pokeApi.adapter"

export class Pokemon {

    get imageUrl(): string {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`
    }

    constructor(
        public readonly id: number,
        public name: string,
        private readonly httpClient: HttpAdapter
    ) { }

    async getMoves(): Promise<Move[]>  {
        const { moves } = await this.httpClient.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        console.log(moves)
        return moves
    }
}

const pokeApi = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

export const pikachu = new Pokemon(25, 'Pikachu', pokeApiFetch)
pikachu.getMoves()
