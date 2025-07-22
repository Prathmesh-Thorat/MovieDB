import { createContext,useState,useContext,useEffect, Children } from "react";

const Moviecontext = createContext();

export const usemoviecontext = () => useContext(Moviecontext)
export const Movieprovider = ({children}) =>{

const [fav,setfav] =useState([]);

useEffect(() => { 
    const storedfavs = localStorage.getItem("fav")
    if(storedfavs) setfav(JSON.parse(storedfavs))
},[])

useEffect(()=>{
    localStorage.setItem('fav',JSON.stringify(fav))
},[fav])

const addtofav = (movies)=>
{
     setfav(prev =>[...prev,movies])
}

const removefromfav = (movieid)=>
{
    setfav(prev => prev.filter(movie => movie.id !== movieid))
}

const isfav = (movieid) =>
{
    return fav.some(movie => movie.id === movieid)
}

const value = {
    fav,
    addtofav,
    removefromfav,
    isfav,
}

return (<Moviecontext.Provider value={value}>
    {children}
</Moviecontext.Provider>)
}