import React, { useContext } from 'react'
import { GlobalContext } from '../Context'
import Recipe_item from '../components/Recipe-item'
const Home = () => {
  let {loading, recipeList} = useContext(GlobalContext)
  return (
    <div className='flex flex-wrap justify-center gap-10'>
      {
        recipeList?
        recipeList.map((item)=>{
          return <Recipe_item item={item}/>
        })
        :null
      }
      {
        loading?
        <h1 className='font-extrabold shadow-md text-4xl flex justify-center m-5 mt-24'>search Food item to get its recipe 🍅🍞🍠</h1>
        :null
      }
    </div>
  )
}

export default Home
