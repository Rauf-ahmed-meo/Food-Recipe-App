import React from 'react'
import {Link} from "react-router-dom"
const Recipe_item = ({ item }) => {
    return (
        <div>
            {
                item ?
                    <div className='border border-black w-52 h-60 rounded-lg flex justify-center bg-slate-100 shadow-md flex-col items-center'>
                        <div className='border w-40 h-40 object-center overflow-hidden'>
                            <img src={item.image_url} alt="image of food" />
                        </div>
                        <h1>{item.title}</h1>
                        <button className='border border-black rounded-lg p-2 text-white bg-black'><Link to={`/recipe-item/${item.id}`}>Show Details</Link></button>
                    </div>
                    : null
            }
        </div>
    )
}

export default Recipe_item
