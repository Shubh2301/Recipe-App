import { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'
import RecipeCard from '../components/RecipeCard';

const Recipes = () => {
  const[recipe]=useContext(recipecontext);

  const renderrecipes=recipe.map(data=>{
    return( 
       <RecipeCard key={data.id} data={data} />
    )
  })
  return (
    <div className='flex flex-wrap'>
      {recipe.length>0 ?renderrecipes : "No recipes found!"}
    </div>
  )
}



export default Recipes

