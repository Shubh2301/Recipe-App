import {  createContext, useState } from 'react'

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
    const [recipe, Setrecipe] = useState([])
    return (
        <recipecontext.Provider value={[recipe, Setrecipe]}>
            {props.children}
        </recipecontext.Provider>
    )
}

export default RecipeContext;



// {
//     "id": 1,
//     "title": "Classic Margherita Pizza",
//     "desc": "A simple and delicious Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil.",
//     "ingr": [
//       "2 cups all-purpose flour",
//       "1 cup warm water",
//       "1 tsp yeast",
//       "1 tsp sugar",
//       "1 tsp salt",
//       "1/2 cup pizza sauce",
//       "200g mozzarella cheese",
//       "Fresh basil leaves",
//       "2 tbsp olive oil"
//     ],
//     "ins": [
//       "Mix warm water, sugar, and yeast. Let it rest for 10 minutes.",
//       "Add flour and salt. Knead into a soft dough.",
//       "Cover and let it rise for 1 hour.",
//       "Roll out the dough and spread pizza sauce.",
//       "Add mozzarella cheese and tomatoes.",
//       "Bake at 220°C for 12-15 minutes.",
//       "Garnish with fresh basil and olive oil before serving."
//     ],
//     "chef": "Chef Antonio Rossi",
//     "image": "https://tse4.mm.bing.net/th/id/OIP.IH1jvMdFVgDY4U3egryvWAHaIs?pid=Api&P=0&h=180"
//   },