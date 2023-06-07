import React from 'react'

export default function CardImage({ src }) {
    return (
        <div className="clash-card__image clash-card__image--barbarian">
            <img src={src} alt="barbarian" />
        </div>
    )
}
