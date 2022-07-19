import React from "react";
import { useState } from "react";

export function Counter() {
    const [like, setLike] = useState(0);
    const [disLike, setDisLike] = useState(0);
    const increase = () => {
        setLike(like + 1);
        console.log(like);
    };
    const decrease = () => {
        setDisLike(disLike + 1);
    };

    return (
        <div>
            <div classNAme="counter-container">
                <button className="like-button" onClick={() => increase()}>Like 👍 ❤ {like}</button>
                <button className="disLike-button" onClick={() => decrease()}>Like 👎 🤦‍♀️ {disLike}</button>
            </div>
        </div>
    );
}
