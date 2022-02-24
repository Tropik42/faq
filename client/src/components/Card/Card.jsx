import React from "react";
import './Card.css'

function Card () {
    return (
          <a className="_card">
            <div className="d-flex flex-column">                  
                <div><h3 className="float-left">Title</h3><p className="float-right">Type</p></div>
                <div><p>Description</p></div>    
            </div>                 
          </a>
    )
}

export default Card;