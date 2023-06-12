import Navbar from "./components/Navbar/Navbar";
import style from  './App.module.css'
import {themes} from "./constant/theme"
import {bannerConstants} from "./constant/banner"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { useContext } from "react";
import {ThemeContext} from "./contexts/themeContext"
import Banner from "./components/Banner/Banner";
import { Footer } from "./components/Footer/Footer";
import Favourites from "./components/Favourites/Favourites";
import FavouritiesContext from "./contexts/favouritesContext";
import Home from "./pages";
import Details from "./pages/details";
 const App = () => {
// style.flexBox
 const theme=useContext(ThemeContext)
 const {isOpen,setIsOpen}=useContext(FavouritiesContext)
 const items=[{
  title : "Cloud Computing",
  image : { url: "/images/topics-thumbnails/cloud.jpeg", alt: "react course" },
  startRating : 4,
  totalStars :5,
},{
  title : "Cloud Computing",
  image : { url: "/images/topics-thumbnails/cloud.jpeg", alt: "react course" },
  startRating : 1,
  totalStars :5,
},
{
  title : "Cloud Computing",
  image : { url: "/images/topics-thumbnails/cloud.jpeg", alt: "react course" },
  startRating : 2,
  totalStars :5,
}]


  return (
    <BrowserRouter>
    <div className={`${style.flexBox} ${themes.dark===theme.theme ?style.darkMode+' '+style.body:style.body}`}>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Banner {...bannerConstants} />
      <div className={style.container}>
        
      
      <Routes>
        <Route path="/">
          <Route index element={  <Home />} />
        
          
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<div>Not Found</div>} />

        </Route>
      </Routes>
  
    </div>
      <Footer/>
      <Favourites show={isOpen} items={items}/>
    </div>

    </BrowserRouter>
  );
};

export default App