import React from "react"

import AirbnbLogo from "/airbnb.png"

export const NavBar = () => {
    return (
        <section className="nav-bar">
            <img className="nav-bar-logo" src={AirbnbLogo} />
        </section>
    )
}