/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react';
import pokeApi from '../../../api/pokeApi';
import PokeCard from '../../PokeCard/PokeCard';
import './Home.css';
import appContext from '../../../context/AppContext';

function Home() {

    const {setPokemon, setLoading, geracao} = useContext(appContext)


    useEffect(() => {
         pokeApi.endpointPokes(geracao)
         .then(response => {
            setPokemon(response)
            setLoading(false)
            
         });
        
    },[]);

    
    useEffect(() => {
        pokeApi.endpointPokes(geracao)
        .then(response => {
           setPokemon(response)
           setLoading(false)
           
        });
       
   },[geracao]);

    

 /*    const getPokemons = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/2')
        .then((response) => {
            setPokemon(response.data)
            setLoading(false)
        }).catch(erro => console.log(erro))
        console.log(pokemon)
    } */


    return (
        <div className='container'>
            <PokeCard />
           
        </div>
    )
}

export default Home;