import React from "react"
import illustrate from "./images/illustration-grow-together.svg"

export default function Section1(){
  return(
        <div className="box2">
        <div className="box2text">
            <h1 className="box2text-head">Grow Together</h1>
            <p className="box2text-desc">
                Generate menaingful discussions with your audience and build
                a strong, loyal community. Think of the insightful conversations 
                you miss out on with a feedback form.
            </p>
        </div>
        <img alt="image" src={illustrate} className="box2image" />
    </div>
  )
}