import React from "react"
import users from "./images/illustration-your-users.svg"

export default function Section3(){
  return(
        <div className="box2" id="box4">
        <div className="box2text">
            <h1 className="box2text-head">Your Users</h1>
            <p className="box2text-desc">
                It takes no time at all to intrgrate Huddle with your
                app's authentication solution. This means, once signed in to
                your app, your users can start chatting immediately.
            </p>
        </div>
        <img alt="image" src={users} id="box4image" className="box2image"/>
    </div>
  )
}