// const SingleRecipe = () => {
//     const params = useParams()
//     const [data] = useContext(recipecontext)

//     const rcipe = data.find((recipe) => params.id == recipe.id)
     
//      const { register, handleSubmit, reset, formState: { errors } } = useForm();
//     const [recipes, Setrecipe] = useContext(recipecontext);

//     const navigate=useNavigate()

//     useParams()
//     const rec=data.find((recipe)=>params.id==recipe.id)

//     const SubmitHandler = (recipe) => {
//         const index=data.findIndex((recipe)=>params.id==recipe.id);
//         const copydata=[...data];
//         copydata[index]={...copydata[index],...recipe}
//         Setrecipe(copydata)
        
//     }

//     const handleDelete=()=>{
//         const filterdata=data.find((recipe)=>params.id==recipe.id);
//         Setrecipe(filterdata);
//         toast.success("recipe deleted!")
//         navigate("/recipes")
//     }
//     return (
//         recipe ? <div className='w-full flex'>
//             <div className="left w-1/2 p-2">
//                 <h1 className='text-5xl font-black'>{rcipe.title}</h1>
//                 <img className='h-[20vh]' src={rcipe.image} alt="" />
//             </div>

//             <form className='1/2 p-2' onSubmit={handleSubmit(SubmitHandler)}>
//                 <input type="url" className='block border-b outline-0  p-2'  {...register("image")} placeholder='image url' value={rcipe.image} />
//                 <small className='text-red-400'>abc</small>

//                 <input type="text" className='block border-b outline-0  p-2' placeholder='Recipe Title' {...register("title")} value={rcipe.title} />

//                 <input type="text" className='block border-b outline-0  p-2' placeholder='Chef name' {...register("chef")} />


//                 <textarea name="" className='block border-b outline-0  p-2' placeholder='enter description' {...register("desc")} value={rcipe.chef} > </textarea>


//                 <textarea name="" className='block border-b outline-0  p-2' placeholder='ingredients' {...register("ingr")}  ></textarea>


//                 <textarea name="" className='block border-b outline-0  p-2' placeholder='instructions' {...register("ins")} ></textarea>

//                 <select name="" className='block border-b outline-0  p-2'  {...register("category")} >
//                     <option value="breakfast">Breakfast</option>
//                     <option value="lunch">Lunch</option>
//                     <option value="dinner">Dinner</option>
//                 </select>


//                 <button className='block mt-5 bg-blue-900 px-3 py-2 rounded cursor-pointer'>Update Recipe</button>
//                 <button className='block mt-5 bg-red-500 px-3 py-2 rounded cursor-pointer' onClick={handleDelete}>Delete</button>


//             </form>



//         </div> : "Loading...."
//     )
// }
import { useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { recipecontext } from '../context/RecipeContext'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';

const SingleRecipe = () => {

    const params = useParams();
    const navigate = useNavigate();

    const [data, Setrecipe] = useContext(recipecontext);

    const recipe = data.find((r) => params.id == r.id);

    const { register, handleSubmit } = useForm();

    const SubmitHandler = (updatedRecipe) => {
        const index = data.findIndex((r) => params.id == r.id);
        const copydata = [...data];
        copydata[index] = { ...copydata[index], ...updatedRecipe };
        Setrecipe(copydata);
        toast.success("Recipe updated!");
    }

    const handleDelete = () => {
        const filterdata = data.filter((r) => params.id != r.id);
        Setrecipe(filterdata);
        toast.success("Recipe deleted!");
        navigate("/recipes");
    }
 

    useEffect(()=>{
        console.log("SingleRecipe.jsx Mounted");
        return ()=>{
           console.log("SingleRecipe.jsx Unmounted");    
        }
    },[])

    return (
        recipe ? <div className='w-full flex'>
            <div className="left w-1/2 p-2">
                <h1 className='text-5xl font-black'>{recipe.title}</h1>
                <img className='h-[20vh]' src={recipe.image} alt="" />
            </div>

            <form className='1/2 p-2' onSubmit={handleSubmit(SubmitHandler)}>
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

