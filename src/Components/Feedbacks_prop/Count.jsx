import React from 'react'
import './Count.scss'

export default function Count(props) {
  return (
    <>
        <div className="count">
            <img className='count__img' src={props.img} alt="img" />
            <p className="count__strongText">{props.strongText}</p>
            <p className="count__normalText">{props.normalText}</p>
        </div>
    </>
  )
}
