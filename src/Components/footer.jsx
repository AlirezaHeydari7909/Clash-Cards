import React from 'react'
import State from './State'

export default function Footer({hero}) {
    const state = hero.units.map((unit, index) => <State state={unit.state} value={unit.value} key={index}/>)
    return (
        <div className={`clash-card__unit-stats clash-card__unit-stats--${hero.name} clearfix`}>
            {state}

        </div>
    )
}
 