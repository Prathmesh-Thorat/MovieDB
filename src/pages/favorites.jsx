import "../Css/Favorites.css"
import { usemoviecontext } from "../Context/moviecontext"
import MovieCard from "../Components/Moviecard"

function Favorites()
{
    const {fav}=usemoviecontext()

    if(fav){
        return(
            <div className="fav">
                <h2>Your Watchlist</h2>
           <div className="movie-grid">
         {fav.map((movie) => (
             <MovieCard movie={movie} key={movie.id} />))}
      </div>  
             </div>
        )
    }

    return <div className="favorites-empty">
        <h2>Watchlist is Emptyt</h2>
        <p>Like Movies To Add To Watchlist</p>
    </div>
}

export default Favorites