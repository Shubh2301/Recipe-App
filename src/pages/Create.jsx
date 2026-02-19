import { nanoid } from 'nanoid';
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { recipecontext } from '../context/RecipeContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const Create = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [recipe, Setrecipe] = useContext(recipecontext);

    const navigate=useNavigate()

    const SubmitHandler = (data) => {
        data.id = nanoid();

        const copydata = [...recipe]
        copydata.push(data);
        Setrecipe(copydata);
        toast.success("Recipe added!")
        reset()
        navigate("/recipes")
    }

    return (
        <div>
            <form onSubmit={handleSubmit(SubmitHandler)}>
                <input type="url" className='block border-b outline-0  p-2'  {...register("image")} placeholder='image url' />
                <small className='text-red-400'>abc</small>

                <input type="text" className='block border-b outline-0  p-2' placeholder='Recipe Title' {...register("title")} />

                <input type="text" className='block border-b outline-0  p-2' placeholder='Chef name' {...register("chef")} />


                <textarea name="" className='block border-b outline-0  p-2' placeholder='enter description' {...register("desc")} > </textarea>


                <textarea name="" className='block border-b outline-0  p-2' placeholder='ingredients' {...register("ingr")} ></textarea>


                <textarea name="" className='block border-b outline-0  p-2' placeholder='instructions' {...register("ins")} ></textarea>

                <select name="" className='block border-b outline-0  p-2'  {...register("category")} >
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                </select>


                <button className='block mt-5 bg-gray-900 px-3 py-2 rounded cursor-pointer'>Save Recipe</button>


            </form>
        </div>
    )
}

export default Create