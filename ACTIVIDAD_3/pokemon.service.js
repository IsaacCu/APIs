const base_url="https://pokeapi.co/api/v2";
async function pedir(ruta) {
    const respuesta =await fetch(base_url + ruta)
    if (!respuesta.ok){
        throw new Error(`Error ${respuesta.status}`)
    }
    return respuesta.json();
}

export function obtenerPokemon (pokemon){
    return pedir(`/pokemon/${pokemon}`);
}

export function listarPokemones (cantidad){
    return pedir(`/pokemon?limit=${cantidad}`);
}