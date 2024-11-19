export const pokemonIds = [1,20,34,66,90,100]

interface Pokemon {
    id: number;
    name: string;
}

export const bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
}

export const pokemons: Pokemon[] = [
    {
        id: 1,
        name: 'Bulbasaur',
    },
    {
        id: 20,
        name: 'Raticate',
    },
    {
        id: 34,
        name: 'Nidoking',
    },
    {
        id: 66,
        name: 'Machop',
    },
    {
        id: 90,
        name: 'Shellder',
    },
    {
        id: 100,
        name: 'Voltorb',
    }
]