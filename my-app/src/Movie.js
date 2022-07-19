import React from "react";
import { Counter } from "./Counter";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

export function Movie({ pic, name, rating, summary ,id}) {

    const styles = {
        color: rating > 8 ? "green" : "red"
    };
    const[show,setShow]=useState(true)
    const parastyling={
        display:show ? "block" :"none"
    }

    const navigate=useNavigate()
    return (

        <div className="movie-container">
            <img className="movie-poster" src={pic} alt={name}></img>
            <div className="movie-spec">
                <h2 className="movie-name">{name}</h2>
                <p style={styles} className="movie-rating">{rating} ⭐</p>
            </div>
            <button onClick={()=>setShow(!show)}>Toggle Summary</button>
            <button onClick={()=>navigate(`/movies/${id}`)}>Info</button>
            <p style={parastyling} className="movie-summary">{summary}</p>
            <Counter />
        </div>

    );
}
