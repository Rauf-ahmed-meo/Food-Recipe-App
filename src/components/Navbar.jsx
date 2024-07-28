import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../Context'
const Navbar = () => {
  const {searchParam, setsearchParam, handleSubmit} = useContext(GlobalContext)
  return (
    <nav className='flex justify-around mt-5 items-center'>
      <h1 className='text-2xl font-extrabold font-serif'>Food Recipe</h1>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <input type="text" 
        className='border shadow-md focus:shadow-red-500 rounded-full p-3'
        placeholder='food item...'
        onChange={(e)=>setsearchParam(e.target.value)}
        value={searchParam}
        />
        </form>

        <ul className='flex gap-10'>
            <NavLink to={"/"}>
                Home
            </NavLink>
            <NavLink to={"/favourites"}>
                Favourites
            </NavLink>
        </ul>
    </nav>
  )
}

export default Navbar
