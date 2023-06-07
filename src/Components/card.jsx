import React from 'react'
import CardImage from './cardImage'
import CardsDetails from './cardsDetails'
import Footer from './footer'

export default function Card({hero}) {
    return (
        <div className={`clash-card ${hero.name}`} >
            <CardImage src={hero.img} />
            <CardsDetails type={`clash-card__level clash-card__level--${hero.name}`} >{hero.level}</CardsDetails>
            <CardsDetails type="clash-card__unit-name">The {hero.name}</CardsDetails>
            <CardsDetails type="clash-card__unit-description">
                {hero.description}
            </CardsDetails>
            <Footer hero={hero}/>

        </div>
    )
}
