import { useEffect, useState } from "react";
import { createContext } from "react";
import { json } from "react-router-dom";

export const GlobalContext = createContext()

export default function GlobalState({ children }) {
    const [searchParam, setsearchParam] = useState("")
    const [recipeList, setrecipeList] = useState([])
    const [loading, setloading] = useState(true)
    const [recipeDetails, setrecipeDetails] = useState(null)
    const [favouritesList, setfavouritesList] = useState(()=>{
        const savedFavs = localStorage.getItem("myFavs")
        return savedFavs?JSON.parse(savedFavs):[]
    }
    )

    function addFavourite(item) {
        setfavouritesList([
            ...favouritesList,
            item
        ])
    }


    function removeFavourite(item){
        setfavouritesList(
            favouritesList.filter((obj)=>obj.id !== item.id)
        )
    }

    useEffect(()=>{
       localStorage.setItem("myFavs", JSON.stringify(favouritesList)) 
    }, [favouritesList])

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            setloading(true)
            let res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
            let data = await res.json()
            if (data?.data?.recipes) {
                setloading(false)
                setrecipeList(data.data.recipes)
                setsearchParam("")
            }
        } catch (e) {
            setloading(false)
            console.log(e);
        }
    }
    return (
        <GlobalContext.Provider value={{ searchParam, loading, recipeList, setsearchParam, handleSubmit, recipeDetails, setrecipeDetails, addFavourite, favouritesList, setfavouritesList, removeFavourite }}>
            {children}
        </GlobalContext.Provider>
    )
}