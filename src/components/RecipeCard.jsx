import { Link } from 'react-router';

const RecipeCard = (props) => {
    const{id,image,title,desc,chef,ingr,ins}=props.data;
  return (
    <Link to={`/recipes/detail/${id}`} className='w-[23vw] rounded overflow-hidden block mr-3 mb-3 hover:scale-101 duration-50'>
    <img className='w-full h-[22vh] object-cover' src={image} alt="" />
    <h1 className='px-2 mt-2 font-black'>{title}</h1>
    <small className='px-2 text-red-400'>{chef}</small>
    <p className='px-2 pb-3'> 
        {desc.slice(0,100)}... 
        <small className='text-blue-400'>more</small> 
    </p>
    </Link>
  )
}

export default RecipeCard