import React from "react";

export function ColorBox({ color }) {
    const styles = {
        backgroundColor: color,
        width: "350px",
        height: "25px",
        marginTop: "20px",
        marginLeft: "20px"
    };
    return (



        <div style={styles}></div>


    );
}
