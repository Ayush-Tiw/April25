import React from "react";
import { useState } from "react";

export function AddMovie({ movieList, setMovieList }) {

    const [poster, setPoster] = useState();
    const [title, setTitle] = useState();
    const [rating, setRating] = useState();
    const [summary, setSummary] = useState();

    const AddMovie = () => {
        const newMovie = {
            image: poster,
            title: title,
            ratings: rating,
            description: summary
        };
        setMovieList([...movieList, newMovie]);
    };
    return (
        <div>
            <div className="add-movie-form">
                <input onChange={(event) => setPoster(event.target.value)} placeholder="poster"></input>
                <input onChange={(event) => setTitle(event.target.value)} placeholder="title"></input>
                <input onChange={(event) => setRating(event.target.value)} placeholder="rating"></input>
                <input onChange={(event) => setSummary(event.target.value)} placeholder="summary"></input>

                <p> poster:{poster}</p>
                <p>title:{title}</p>
                <p>rating:{rating}</p>
                <p> summary:{summary}</p>


                <button onClick={() => AddMovie()}>Add Movie</button>
            </div>
        </div>
    );
}
