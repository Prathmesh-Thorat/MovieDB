import "../Css/Favorites.css"
import { usemoviecontext } from "../Context/moviecontext"
import MovieCard from "../Components/MovieCard"

function Favorites()
{
    const {fav}=usemoviecontext()

    if(fav){
        return(
            <div className="fav">
                <h2>Your Favorites</h2>
           <div className="movie-grid">
         {fav.map((movie) => (
             <MovieCard movie={movie} key={movie.id} />))}
      </div>  
             </div>
        )
    }

    return <div className="favorites-empty">
        <h2>NO fav yet</h2>
        <p>add favorites</p>
    </div>
}

export default Favorites