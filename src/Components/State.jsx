import React from 'react'

export default function State({state, value}) {
    return (
        <div className="one-third">
            <div className="stat">{state}</div>
            <div className="stat-value">{value}</div>
        </div>
    )
}
