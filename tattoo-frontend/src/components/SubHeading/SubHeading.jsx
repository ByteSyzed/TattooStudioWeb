import React from "react";

import "./SubHeading.css";

import images from "../../constants/images";

const SubHeading = ({title}) => (
    <div style = {{ marginBottom: '1rem'}}>
        <p className="p__cormorant">{title}</p>
        <hr style={{border: "none", height: "2px", backgroundColor: "#000"}} />
        {/* <img src = {images.cute_line} alt = "cute_line" className="cute__line__img"/> */}
    </div>
);

export default SubHeading;