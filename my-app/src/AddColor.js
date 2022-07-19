import React from "react";
import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
    const initial_color_list = [
        "violet", "indigo", "blue", "green"
    ];
    const [colorList, setColorList] = useState(initial_color_list);
    const [color, setColor] = useState("");
    const styles = {
        backgroundColor: color
    };
    return (
        <div>
            <div className="add-color">
                <input style={styles} onChange={(event) => setColor(event.target.value)} placeholder="Enter the Color"></input>
                <button onClick={(event) => setColorList([...colorList, color])}> Add Color</button>
            </div>
            {colorList.map((clr) => (<ColorBox color={clr} />))}
        </div>
    );
}
