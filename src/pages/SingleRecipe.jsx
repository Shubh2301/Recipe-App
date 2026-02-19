import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { recipecontext } from '../context/RecipeContext'

const SingleRecipe = () => {
    const params=useParams()
    const[data]=useContext(recipecontext)

    const recipe=data.find((recipe)=>params.id==recipe.id)
  return (
    recipe ? <div>SingleRecipe</div> : "Loading...."
  )
}

export default SingleRecipe