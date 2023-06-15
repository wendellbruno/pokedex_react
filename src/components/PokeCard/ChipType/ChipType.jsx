/* eslint-disable jsx-a11y/alt-text */
import './ChipType.css';

function ChipType({type}){
    return(
         <div className={`chip ${type}`}>
            <img src={`types/${type}.svg`} />
            <p>{type.toUpperCase()}</p>
         </div>
    )
}

export default ChipType;