import { useContext } from "react";
import "./PokeCard.css";
import appContext from "../../context/AppContext";
import ChipType from "./ChipType/ChipType";
import Loading from "../Loading/Loading";
import PokeSelecionado from "../PokeSelecionado/PokeSelecionado";
import ImagePokemon from "./ImagePokemon/ImagePokemon";
import SearchBar from "./SearchBar/SearchBar";

function PokeCard() {
  const { pokemon, loading, setGeracao, setPokeSelecionado } =
    useContext(appContext);

  function trocarGeracao(geracao) {
    setGeracao(geracao);
  }

  function handleSelectPokemon(elemento) {
    //console.log(pokeSelecionado)
    setPokeSelecionado(elemento);
  }

  if (loading) {
    return <Loading texto={"Carregando..."} />;
  }

  return (
    <main>
      <div className="inputs">
        <div className="geracoes">
          <p>Geração</p>
          <ul>
            <li onClick={() => trocarGeracao(1)}>I</li>
            <li onClick={() => trocarGeracao(2)}>II</li>
            <li onClick={() => trocarGeracao(3)}>III</li>
            <li onClick={() => trocarGeracao(4)}>IV</li>
            <li onClick={() => trocarGeracao(5)}>V</li>
            <li onClick={() => trocarGeracao(6)}>VI</li>
            <li onClick={() => trocarGeracao(7)}>VII</li>
            <li onClick={() => trocarGeracao(8)}>VIII</li>
          </ul>
        </div>
        <div className="search">
          <SearchBar />
        </div>
      </div>
      <div className="container_card">
        <div className="pokemons">
          {pokemon.map((elemento, index) => {
            return (
              <div
                className={`card_pokemon ${elemento.data.types[0].type.name}`}
                key={index}
              >
                {/* <img
                      src={
                        elemento.data["sprites"]["versions"]["generation-v"][
                          "black-white"
                        ]["animated"]["front_default"]
                      }
                    ></img> */}
                <ImagePokemon pokemon={elemento} />
                <div className="detalhes">
                  <span>
                    {elemento.data.name.toUpperCase()} #{elemento.data.id}
                  </span>
                  <div className="types">
                    {elemento.data.types.map((typePoke, index) => {
                      return <ChipType type={typePoke.type.name} key={index} />;
                    })}
                  </div>
                  <button onClick={() => handleSelectPokemon(elemento)}>
                    Ver mais
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="detalhes_pokemon">
          <PokeSelecionado />
        </div>
      </div>
    </main>
  );
}

export default PokeCard;
