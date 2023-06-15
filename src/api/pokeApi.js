import axios from "axios";

const pokeApi = async (pokemon) => {
    let data = ''
    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        data = response
        return data
    }catch(erro){
        return data
    }

}

const endpointPokes = async (geracao) =>{
    let inicio;
    let fim;
    if(geracao === 1){
        inicio = 1;
        fim = 151;
    }else if(geracao === 2){
        inicio = 152;
        fim = 251;
    }else if(geracao === 3){
        inicio = 252;
        fim = 386;
    }else if(geracao === 4){
        inicio = 387;
        fim = 493;
    }else if(geracao === 5){
        inicio = 494;
        fim = 649;
    }else if(geracao === 6){
        inicio = 650;
        fim = 721;
    }else if(geracao === 7){
        inicio = 722;
        fim = 809;
    }else if(geracao === 8){
        inicio = 810;
        fim = 905;
    }
    else if(geracao === 9){
        inicio = 906;
        fim = 1015;
    }



    var endpoints = [];
    for (var i = inicio; i <= fim; i++){
        endpoints.push(
            `https://pokeapi.co/api/v2/pokemon/${i}`
        )}
    try{
        var response = await axios.all(endpoints.map( (element) => axios.get(element)))
        return response;
    }catch(erro){
        console.log(erro)
        return; 
    }
}

export default {
    endpointPokes,
    pokeApi
}
