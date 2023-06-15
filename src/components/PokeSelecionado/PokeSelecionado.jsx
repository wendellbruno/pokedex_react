import { useContext } from "react";
import "./PokeSelecionado.css";
import appContext from "../../context/AppContext";
import Loading from "../Loading/Loading";
import ImagePokemon from "../PokeCard/ImagePokemon/ImagePokemon";
import ChipType from "../PokeCard/ChipType/ChipType";
import StatusBar from "./StatusBar/StatusBar";

function PokeSelecionado() {
  const { pokeSelecionado } = useContext(appContext);

  if (pokeSelecionado === "") {
    return <Loading texto={"Nenhum Pokemon selecionado"} />;
  }

  return (
    <div className="container_selecionado">
      {
        <div className="info_poke">
          <div
            className={`container_bg ${pokeSelecionado.data.types[0].type.name}`}
          ></div>
          <div className="content_selecionado">
            <div className="img_poke">
              <ImagePokemon pokemon={pokeSelecionado} />
            </div>
            <div className="detalhes selecionado">
              <span>
                {pokeSelecionado.data.name.toUpperCase()} #
                {pokeSelecionado.data.id}
              </span>
              <div className="types selecionado">
                {pokeSelecionado.data.types.map((typePoke, index) => {
                  return <ChipType type={typePoke.type.name} key={index} />;
                })}
              </div>
            </div>
          </div>
            <div className="status">
              {pokeSelecionado.data.stats.map((status, index) => {
                return (
                  <StatusBar status={status} index={index} />
                );
              })}
            </div>
        </div>
      }
    </div>
  );
}

export default PokeSelecionado;
