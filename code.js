


function pepe(url = "https://pokeapi.co/api/v2/pokemon/") {

    let url_api = url;


    let consumo = fetch(url_api)
    consumo.then(res => res.json())
        .then(data => {
            let desabilitado = (data.next == null) ? "disabled" : ""
            let btnnext = `
            <button type="button" class="btn btn-danger ${desabilitado}" onclick="pepe('${data.next}')">Siguiente</button>
            `
            let info = data.results
            let cards = document.querySelector("#pokemones")
                                cards.innerHTML = ""
            info.forEach(urlPokemon => {
                let url2 = urlPokemon.url
                let consumo2 = fetch(url2)
                consumo2.then(res => res.json())
                    .then(data2 => {
                        let url3 = data2.abilities[1].ability.url
                        let consumo3 = fetch(url3)
                        consumo3.then(res => res.json())
                            .then(data3 => {
                                cards.innerHTML += `
                                <div class="card col-6 align-items-center">
                                    <img src="${data2.sprites.other.dream_world.front_default}" class="card-img-top w-50 justify-content-center align-items-center" alt="Imagen Pokemon">
                                    <div class="card-body">
                                        <h5 class="card-title">${data2.name}</h5>
                                        <p class="card-text">Efecto 1: ${data3.effect_entries[1].effect}</p>
                                        <p class="card-text">Efecto 1: ${data3.weight}</p>
                                        ${btnnext}
                                        </div>
                                </div>
                                `
                            })
                    })
            });
            
        })
}
                                                                                                                                                    

let botonBusqueda = document.querySelector("#busqueda")
botonBusqueda.addEventListener("click", () => {
    let inputBusqueda = document.querySelector("#search").value
    let url_api = "https://pokeapi.co/api/v2/pokemon/" + inputBusqueda;
    let consumo2 = fetch(url_api)
    consumo2.then(res => res.json())
        .then(data2 => {
            let url3 = data2.abilities[1].ability.url
            console.log(url3)
            let consumo3 = fetch(url3)
            consumo3.then(res => res.json())
                .then(data3 => {
                    let cards = document.querySelector("#pokemones")
                    cards.innerHTML = `
                        <div class="card col-5 align-items-center ">
                            <img src="${data2.sprites.other.dream_world.front_default}" class="card-img-top w-50 justify-content-center align-items-center" alt="Imagen Pokemon">
                            <div class="card-body">
                                <h5 class="card-title">${data2.name}</h5>
                                <p class="card-text">Efecto 1: ${data3.effect_entries[0].effect}</p>
                                <p class="card-text">Efecto 2: ${data3.effect_entries[1].effect}</p>
                            </div>
                        </div>
                    `
                })
        })
})

pepe()










// text overflow ellipsis