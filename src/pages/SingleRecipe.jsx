import { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { recipecontext } from '../context/RecipeContext'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';


const SingleRecipe = () => {

    const params = useParams();
    const navigate = useNavigate();

    const [data, Setrecipe] = useContext(recipecontext);

    const recipe = data.find((r) => params.id == r.id);

    const { register, handleSubmit } = useForm({
        title: data?.title,
        chef: data?.chef,
        image: data?.image,
        ins: data?.ins,
        desc: data?.desc,
        ingr: data?.ingr
    });

    const UpdateHandler = (updatedRecipe) => {
        const index = data.findIndex((r) => params.id == r.id);
        const copydata = [...data];
        copydata[index] = { ...copydata[index], ...updatedRecipe };
        Setrecipe(copydata);
        localStorage.setItem("recipes", JSON.stringify(copydata))
        toast.success("Recipe updated!");
    }

    const handleDelete = () => {
        const filterdata = data.filter((r) => params.id != r.id);
        Setrecipe(filterdata);
        localStorage.setItem("recipes", JSON.stringify(filterdata))
        toast.success("Recipe deleted!");
        navigate("/recipes");
    }


   

    const[favorite,Setfavorite]=useState(
        JSON.parse(localStorage.getItem("fav")) || []
    )

    
  const handleFav = () => {
    const copydata=[...favorite];
    copydata.push(recipe)
    Setfavorite(copydata)
        favorite.push(recipe)
       localStorage.setItem("fav",JSON.stringify(favorite))
    }

    const handleUnfav = () => {
        const filterfav=favorite.filter((f)=>f.id!=recipe?.id)
        Setfavorite(filterfav)
        localStorage.setItem("fav",JSON.stringify(filterfav))
    }

    
      useEffect(() => {
        return () => {
        }

    }, [favorite])
 

    return (
        recipe ? <div className='w-full flex'>
            <div className="left w-1/2 p-10 relative">
                {favorite.find((f)=>f.id==recipe?.id) ?(
                    <i onClick={handleFav} className="ri-poker-hearts-line text-3xl text-red-500 absolute right-[5%]"></i>) :(
                    <i onClick={handleUnfav} className="ri-poker-hearts-fill text-3xl text-red-500 absolute right-[5%]"></i>)
                }

                <h1 className='text-5xl font-black'>{recipe.title}</h1>
                <img className='h-[20vh]' src={recipe.image} alt="" />
            </div>

            <form className='1/2 p-2' onSubmit={handleSubmit(UpdateHandler)}>
                <input
                    type="url"
                    className='block border-b outline-0 p-2'
                    {...register("image")}
                    defaultValue={recipe.image}
                    placeholder='image url'
                />

                <small className='text-red-400'>abc</small>

                <input
                    type="text"
                    className='block border-b outline-0 p-2'
                    placeholder='Recipe Title'
                    {...register("title")}
                    defaultValue={recipe.title}
                />

                <input
                    type="text"
                    className='block border-b outline-0 p-2'
                    placeholder='Chef name'
                    {...register("chef")}
                    defaultValue={recipe.chef}
                />

                <textarea
                    className='block border-b outline-0 p-2'
                    placeholder='enter description'
                    {...register("desc")}
                    defaultValue={recipe.desc}
                ></textarea>

                <textarea
                    className='block border-b outline-0 p-2'
                    placeholder='ingredients'
                    {...register("ingr")}
                    defaultValue={recipe.ingr}
                ></textarea>

                <textarea
                    className='block border-b outline-0 p-2'
                    placeholder='instructions'
                    {...register("ins")}
                    defaultValue={recipe.ins}
                ></textarea>

                <select
                    className='block border-b outline-0 p-2'
                    {...register("category")}
                    defaultValue={recipe.category}
                >
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                </select>

                <button
                    type="submit"
                    className='block mt-5 bg-blue-900 px-3 py-2 rounded cursor-pointer'
                >
                    Update Recipe
                </button>

                <button
                    type="button"
                    className='block mt-5 bg-red-500 px-3 py-2 rounded cursor-pointer'
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </form>
        </div> : "Loading...."
    )
}

export default SingleRecipe;

