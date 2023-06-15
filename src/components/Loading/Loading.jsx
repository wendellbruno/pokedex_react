import './Loading.css';
import pikachu from '../../assets/UnderstatedFlashyHumpbackwhale-max-1mb.gif'

function Loading({texto}){
    return (
        <div className='loading'>
        <img src={pikachu} alt="" />
        <p>{texto || ''}</p>
        </div>
    )
}

export default Loading;