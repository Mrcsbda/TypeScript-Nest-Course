import axios from "axios"
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface"

export class PokemonExample {
    id: number
    name: string
    types: string[]
    moves: string[]

    constructor(
        id: number,
        name: string,
        types: string[],
        moves: string[],
    ) {
        this.id = id
        this.name = name
        this.types = types
        this.moves = moves
    }

}

export const charmander = new PokemonExample(4, 'Charmander', ['Fire'], ['Scratch', 'Growl'])


//Forma corta para crear clases
export class Pokemon {

    get imageUrl(): string {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`
    }

    constructor(
        // el readonly es para que no se pueda modificar el valor de la propiedad
        public readonly id: number,
        public name: string,
        // public imageUrl: string
    ) { }

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`)
        this.speak()
    }

    // si se coloca private, solo se puede acceder a este metodo dentro de la clase
    private speak() {
        console.log(`${this.name}, ${this.name}`)
    }

    async getMoves(): Promise<Move[]>  {
        const { data } = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        return data.moves
    }
}

export const pikachu = new Pokemon(25, 'Pikachu')
pikachu.scream()
