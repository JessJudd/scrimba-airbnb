import React from "react"

// import Katie from "../assets/katie-zaferes.png"
import Star from "/star.png"

export const Card = (props) => {

    let badgeText
    if(props.card.openSpots ===0){
        badgeText = "sold out"
    } else if (props.card.location === 'Online'){
        badgeText = "online"
    }
    return (
        <div className="card">
            <figure className="card-image">
                {badgeText && <span className="card-label">{badgeText}</span>}
                <img src={props.card.coverImg} />
            </figure>
            <div className="card-content">
                <div className="card-reviews">
                    <img className="star-icon" src={Star} /> <span className="review-score">{props.card.rating}</span> <span className="all-reviews">({props.card.reviewCount})</span> • <span className="location">{props.card.location}</span>
                </div>
                <div className="card-title">{props.card.title}</div>
                <div className="card-price"><span className="custom-price">From ${props.card.price}</span> / person</div>
            </div>
        </div>
    )
}