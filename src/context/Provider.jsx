import {useState } from 'react'
import AppContext from './AppContext';

function Provider({children}){
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [geracao, setGeracao] = useState(1);
    const [pokeSelecionado, setPokeSelecionado] = useState('');

    const value = {
        pokemon, 
        setPokemon,
        loading, 
        setLoading,
        geracao, 
        setGeracao,
        pokeSelecionado, 
        setPokeSelecionado
    }

    return(
        <AppContext.Provider value={value} >
            {children}
        </AppContext.Provider>
    )
}

export default Provider;