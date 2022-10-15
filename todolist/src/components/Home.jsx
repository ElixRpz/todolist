import React,{useState} from "react";
import "./home.css"
import Todolist from "./todolist/Todolist";
import Panier from "./panier/Panier";



const Home = () => {

    const [changeColor,setChangeColor] = useState(false)


    /* JAVASCRIPT */

    return(

        /* HTML*/
        <div className="Home">
            <h1 className={changeColor ? "Home_title_green" : "Home_title"}>Puuuuuute</h1>
            <Todolist changeColor={changeColor} setChangeColor={setChangeColor} />
            <Panier changeColor={changeColor} setChangeColor={setChangeColor}/>
        </div>
    )
}


export default Home