import React from "react"
import flowingconvo from "./images/illustration-flowing-conversation.svg"

export default function Section2(){
  return(
    
    <div className="box2" id="box3">
        <div className="box2text" id="box3text">
            <h1 className="box2text-head">Flowing Conversations</h1>
            <p className="box2text-desc">
                You wouldn't paginate a conversation in real life,
                so why do it online? Our threads have just-in-time 
                loading for a more natural flow.
            </p>
        </div>
        <img alt="image" src={flowingconvo} className="box3image"/>
    </div>

  )
}