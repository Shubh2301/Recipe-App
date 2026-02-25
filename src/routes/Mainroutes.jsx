import { Route, Routes } from 'react-router'
import Home from "../pages/Home"
import Recipes from "../pages/Recipes"
import About from "../pages/About"
import Navbar from '../components/Navbar'
import Create from '../pages/Create'
import SingleRecipe from '../pages/SingleRecipe'
import Fav from '../pages/Fav'
import PageNotFound from '../pages/PageNotFound'

const Mainroutes = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/recipes' element={<Recipes />} />
                <Route path='/recipes/detail/:id' element={<SingleRecipe />} />
                <Route path='/about' element={<About />} />
                <Route path='/create' element={<Create />} />
                <Route path='/fav' element={<Fav />} />
                <Route path='*' element={<PageNotFound/>} />
            </Routes>
        </div>
    )
}

export default Mainroutes