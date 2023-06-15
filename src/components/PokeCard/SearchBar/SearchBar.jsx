import './SearchBar.css';
import { BsSearch } from "react-icons/bs";
import { useState, useContext } from 'react';
import pokeApi from '../../../api/pokeApi';
import appContext from '../../../context/AppContext';

function SearchBar(){

    const [valueInput, setValueInput] = useState('');
    const {setPokeSelecionado } = useContext(appContext)

    const buscarPoke = async (event)=> {
        event.preventDefault();
        const poke = await pokeApi.pokeApi(valueInput.toLowerCase());
        console.log(poke)
        if(poke !== ''){
            setValueInput('');
            setPokeSelecionado(poke);
        }else{
           alert('Pokemon não encontrado')
        }


    }

    return(
        <form onSubmit={buscarPoke}>
            <input 
            type="search" 
            placeholder="Nome ou ID" 
            
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
            />
            <button 
            type='submit'
            
            >
              <BsSearch />
            </button>
          </form>
    )

}

export default SearchBar;