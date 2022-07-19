import React from "react";
import { Movie } from "./Movie";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function MovieList({ movieList }) {
   

    return (
        <div>
            <div className="movies">
                {movieList.map((mv,index) => (
                    <Movie key={index} id={index} pic={mv.image} name={mv.title} rating={mv.ratings} summary={mv.description} />
                ))}
            </div>
        </div>
    );
}
