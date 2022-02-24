import React from "react";
import Card from "../Card/Card"
import './Main.css'

function Main () {
    return (
        <div className="main pt-5">
          {/* <a className="link">
            <div className="d-flex flex-column">                  
                <div><h3 className="float-left">Title</h3><p className="float-right">Type</p></div>
                <div><p>Description</p></div>    
            </div>                 
          </a> */}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
    )
}

export default Main;