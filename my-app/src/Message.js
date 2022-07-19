import React from "react";

export function Message({ name, pic }) {

    return (<div>
        <img src={pic} alt={name}></img>
        <h1>{name}</h1>
    </div>);
}
