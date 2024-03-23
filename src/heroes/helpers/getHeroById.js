import { heroes } from "../data/heroes"

export const getHeroById = ( id ) => {
    return heroes.find( h => h.id === id );
}
