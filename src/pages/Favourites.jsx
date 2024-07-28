import React, { useContext } from 'react'
import Recipe_item from '../components/Recipe-item'
import { GlobalContext } from '../Context'
const Favourites = () => {
  let {favouritesList, setfavouritesList } = useContext(GlobalContext)
  return (
    <div className='flex justify-center gap-10 flex-wrap'>
      {
        favouritesList && favouritesList.length > 0?
        favouritesList.map((item)=>{
          return <Recipe_item item={item}/>
        })
        :<h1 className='font-extrabold shadow-md text-4xl flex justify-center m-5 mt-24'>Your favourites will be shown here 🧡</h1>
      }
    </div>
  )
}

export default Favourites
