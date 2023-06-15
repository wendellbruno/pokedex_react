import './ImagePokemon.css';

function ImagePokemon({pokemon}){
    return(
        <img src={pokemon.data.sprites.front_default} alt=""  className='image_pokemon'/>
    )
}

export default ImagePokemon;