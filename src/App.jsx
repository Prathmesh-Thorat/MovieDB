import Home from "./pages/Home.jsx";
import Favorites from "./pages/favorites.jsx";
import {Routes,Route} from "react-router-dom"
import Navbar from "./Components/Navbar.jsx";
import "./Css/App.css"
import { Movieprovider } from "./Context/moviecontext.jsx";

function App()
{
  return (
    <Movieprovider> 
    <div>
      <Navbar></Navbar>
   <main className="main-content">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
    </Routes>
   </main>
    </div>
    </Movieprovider>
  );
}
export default App;