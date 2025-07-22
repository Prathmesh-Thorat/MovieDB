import "../Css/Moviecard.css"
import { usemoviecontext } from "../Context/moviecontext";

function MovieCard({movie}){

const {isfav,addtofav,removefromfav} = usemoviecontext()
const fav =isfav(movie.id)

    function onfavclick(e){
        e.preventDefault()
        if(fav)removefromfav(movie.id)
        else addtofav(movie)
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src= {`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${fav ? "active" : ""}`} onClick={onfavclick}>♥</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>

        </div>
    );
}
 export default MovieCard;