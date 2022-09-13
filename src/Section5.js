import React from "react"
import logo from "./images/logo1.svg"
import phone from "./images/icon-phone.svg"
import email from "./images/icon-email.svg"

export default function Section3(){
  return(
        <div className="box6">
        <div className="box6-1">
            <img alt="image" src={logo} className="logo1"/>

            <div className="box6-groups">
            <span className="box6location">
                <div className="location">
                    <img alt="image" src="images/icon-location.svg" className="location-image"/>
                    <p className="location-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua
                    </p>
                </div>
                <div className="call">
                    <img alt="image" src={phone} className="call-image"/>
                    <p className="call-desc">
                        +1-543-123-4567
                    </p>
                </div>
                <div className="call">
                    <img alt="image" src={email} className="call-image"/>
                    <p className="call-desc" id="email">
                        example@huddle.com
                    </p>
                </div>
            </span>
            <div className="box6tags1">
                <p className="tag">About Us</p>
                <p className="tag">What We Do</p>
                <p className="tag" id="tag">FAQ</p>
            </div>
            <div className="box6tags2">
                <p className="tag" id="tag2">Career</p>
                <p className="tag">Blog</p>
                <p className="tag">Contact Us</p>
            </div>
            <div className="box6social">

            </div>
            </div>
        </div>

        <div className="footer">
            © Copyright 2018 Huddle. All Rights Reserved.
        </div>

    </div>
  )}