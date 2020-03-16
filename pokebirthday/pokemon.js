function days_passed(dt) {
    var current = new Date(dt.getTime());
    console.log(current);
    var previous = new Date(dt.getFullYear(), 0, 1);
  
    return Math.ceil((current - previous + 1) / 86400000);
}

function now_day() {
    var birthday = document.getElementById('birthday').value;
    var birthday_date = new Date(birthday);
    return days_passed(birthday_date);
}

function findPokemon() {

    var my_pokemon = now_day();

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + my_pokemon);
    xhr.send(null);

    xhr.onreadystatechange = function() 
    {
        if (xhr.readyState === 4) {
            pokemonJSON = JSON.parse(xhr.responseText);

            var pokemon_main = pokemonJSON.name + ' - #' + pokemonJSON.id;

            document.getElementById('name').innerHTML = pokemon_main;
            document.getElementById('sprite').src = pokemonJSON.sprites.front_default;

        }
    }
}