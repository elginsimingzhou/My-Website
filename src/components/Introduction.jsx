import React from "react";
import {Link} from "react-router-dom";

function Introduction(){
    return (
        <div>
            <img src="./images/profile_pic.jpg" alt="Profile" />
            <h2>Personal website/blog</h2>
            <p>Based in Singapore and studying Business and Computing (BCG) at Nanyang Technological University</p>
            <p>Currently learning web dev technologies such as React, Node.js and MongoDB.</p>
            <h2>Self-initiated Projects</h2>
            <Link to="/Page2">View posts...</Link>

        </div>
        

    )
}

export default Introduction;