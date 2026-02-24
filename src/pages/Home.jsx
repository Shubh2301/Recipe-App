import { useEffect } from 'react';
import axios from '../utils/axios';


const Home = () => {
  const getproduct = async () => {
    'https://fakestoreapi.com/products'
    try {
      const { data } = await axios.get()
      console.log(data);

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getproduct()
  },[])

  return (
    <div>
      <h1>Home</h1>
      <button>Get Product</button>
    </div>

  )
}

export default Home