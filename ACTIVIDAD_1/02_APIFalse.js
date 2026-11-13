const url = 'https://pokeapi.co/api/v2/pokemon/cogollo';
async function main() {
    const respuesta = await fetch(url);
    console.log("Código:", respuesta.status);
    console.log("¿OK?:", respuesta.ok);

    if(!respuesta.ok){
        console.log("EL POKEMON NO EXISTE ")
        return;
    }
    console.log("Nombre:", datos.name)


}
main();