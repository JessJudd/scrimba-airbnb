import React from "react"
import Star from "/star.png"

export const Card = ({card}) => {

    let badgeText
    if(card.openSpots ===0){
        badgeText = "sold out"
    } else if (card.location === 'Online'){
        badgeText = "online"
    }
    return (
        <div className="card">
            <figure className="card-image">
                {badgeText && <span className="card-label">{badgeText}</span>}
                <img src={card.coverImg} />
            </figure>
            <div className="card-content">
                <div className="card-reviews">
                    <img className="star-icon" src={Star} /> <span className="review-score">{card.stats.rating}</span> <span className="all-reviews">({card.stats.reviewCount})</span> • <span className="location">{card.location}</span>
                </div>
                <div className="card-title">{card.title}</div>
                <div className="card-price"><span className="custom-price">From ${card.price}</span> / person</div>
            </div>
        </div>
    )
}