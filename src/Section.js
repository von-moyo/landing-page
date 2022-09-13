import React from "react"
import bg from "./images/background.svg"
import logo from "./images/logo.svg"
import illustrations from "./images/illustration-mockups.svg"

export default function Section(){
  return(
        <div className="box1" style={{backgroundImage: `url(${bg})`}}>
        <div className="overlay"></div>
        <div className="headbar">
            <img alt="image" className="logo" src={logo}/>
            <button className="hbutton">Try It Free</button>
        </div>

        <div className="box1-1">
            <div className="bod1">
                <h1 className="bod1head"> Build The Community Your Fans Will love</h1>
                <p className="boddesc">
                    Huddle re-imagines the way we build communities. You have a voice,
                    but so does your audience. Create connections with your users as 
                    you engage in genuine discussions.
                </p>
                <button className="bod1button">
                    Get Started For Free
                </button>
            </div>
            <img alt="image" className="bod2" src={illustrations}/>
        </div>
    </div>
  )
}