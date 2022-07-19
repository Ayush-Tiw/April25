import React from "react";
import { useParams } from "react-router-dom";

export function MovieDetails({ movieList }) {

    const { id } = useParams();
    console.log({ id });
    console.log(movieList[id]);
    const movie = movieList[id];
    const styles = {
        color: movie.ratings > 8 ? "green" : "red"
    };
    return (
        <div>

            <iframe
                width="100%"
                height="650"
                src={movie.trailer} title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

            </iframe>
            <div className="movie-spec">
                <h2 className="movie-name">{movie.title}</h2>
                <p style={styles} className="movie-rating">{movie.rating} ⭐</p>
            </div>
            <p className="movie-summary">{movie.description}</p>


        </div>
    );
}
