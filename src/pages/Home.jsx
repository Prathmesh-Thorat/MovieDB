import MovieCard from "../Components/MovieCard";
import { useState,useEffect } from "react";
import "../Css/home.css"
import { GetSearch, Getpopular } from "../Services/api";
function Home() {
  const [searchquery,setsearchquery] = useState("");
  const [movies,setmovies] = useState([])
  const [error,seterror] = useState(null)
  const [loading,setloading]= useState(true)

   useEffect(() =>{
    const loadpopular = async () => {
      try{
        const popularmovies = await Getpopular()
        setmovies(popularmovies)
      }catch(err){
        console.error(err)
      seterror("failed")}
      finally{
        setloading(false)
      }
    }
    loadpopular()
   },[])

  const handleclick = async (e) =>{
    e.preventDefault()
    if(!searchquery.trim()) return
    if(loading) return
    setloading(true)
    try{
      const searchresult= await GetSearch(searchquery)
      setmovies(searchresult)
      seterror(null)
    }catch(err){
      console.log
    }
    finally{
      setloading(false)
    }

    setsearchquery("")
  } 
 

    
  return (
    <div className="home">
        <form onSubmit={handleclick} className="search-form">
            <input type="text"placeholder="Search" className="search-input"
            value = {searchquery} onChange={(e) => setsearchquery(e.target.value)}/>
            <button type="submit" className="search-button">Search</button>
        </form>

      <div className="movie-grid">
         {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />))}
      </div>
    </div>
  );
}

export default Home;
