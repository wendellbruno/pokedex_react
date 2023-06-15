const colorsTypes = {
    
    'normal': '#B3B5B2',
    'fire': '#F4934D',
    'fighting': '#EB4971' ,
    'water': '#75B1E5',
    'flying': '#B8A5F2',
    'grass': '#7FCA79',
    'poison': '#C582D9',
    'electric': '#F9DF78',
    'ground': '#F78551',
    'psychic': '#FB9D9A',
    'rock': '#D4C9A1',
    'ice': '#91D9CD',
    'bug': '#B5C534',
    'dragon': '#8656FA',
    'ghost': '#7F8AC9',
    'dark': '#7A7981',
    'steel ': '#78AAB5',
    'fairy': '#F1A6EB',

}

async function getColor(color){
    let cor = await colorsTypes[color]
     return cor
}


//getColor('ground')

export default getColor;