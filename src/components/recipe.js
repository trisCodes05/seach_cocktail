import React from 'react'
import '../App.css'

function Recipe({onClose, data}) {
  const ingredients = [];
  let i = 1;

  while (data[`strIngredient${i}`] !== null) {
    ingredients.push({
      ingredient : data[`strIngredient${i}`],
      measure:data[`strMeasure${i}`]});
    i++;
  }
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <div className='recipe__topbar'>
      
      <button className="recipe__btn" onClick={onClose}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
      </button>  
      </div>
        <h2>{data.strDrink}</h2>
        <img className="recipe__img" src={data.strDrinkThumb} alt="cocktail" />
        <ul className='recipe__ingredients'>
        {ingredients.map(({ingredient,measure})=>(
            <li key={ingredient}>{measure} - {ingredient}</li>
          ))}
        </ul>
        <p className='recipe__desc'>{data.strInstructions}</p>   
      </div>
    </div>
  );
}

export default Recipe
