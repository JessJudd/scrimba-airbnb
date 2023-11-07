import React from "react"

import collage from "../assets/hero-collage.png"

export const Hero = () => {
    return (
        <section className="hero">
            <img src={collage} />
            <div className="hero-content">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    )
}