import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../Context'
const Details = () => {
  let { recipeDetails, setrecipeDetails, addFavourite, favouritesList, setfavouritesList, removeFavourite } = useContext(GlobalContext)
  let params = useParams()
  async function getRecipeDetails() {
    const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`)
    let data = await res.json()
    if (data?.data) {
      setrecipeDetails(data.data)
    }
  }
  useEffect(() => {
    getRecipeDetails()
  }, [])
  let isFavourite = recipeDetails && favouritesList.some(obj=>obj.id === recipeDetails.recipe.id)
  return (
    <div className='flex'>
      <div className='w-fit p-8'>
        {
          recipeDetails ?
            <img src={recipeDetails.recipe.image_url}

              alt="food item image"

              className='h-80 hover:scale-105 duration-300 rounded-2xl'
            />
            : null
        }
      </div>
      <main>
        <h1 className='font-serif text-2xl'>{recipeDetails ?
          recipeDetails.recipe.title
          : null}</h1>
        {

          isFavourite ?
            <button className='border border-black rounded-lg p-2 text-black bg-yellow-300 hover:scale-95' onClick={() => removeFavourite(recipeDetails.recipe)}>remove from favourite</button>
            : <button className='border border-black rounded-lg p-2 text-white bg-black hover:scale-95' onClick={() => addFavourite(recipeDetails.recipe)}>Save as favourite</button>
                   
        }
        <h1>Ingredients:</h1>
        <ul>
          {
            recipeDetails?.recipe?.ingredients ?
              recipeDetails.recipe.ingredients.map((ing) => {
                return <li><span>{ing.quantity} </span><span>{ing.unit} </span>{ing.description}</li>
              })
              : null
          }
        </ul>
      </main>
    </div>
  )
}

export default Details
