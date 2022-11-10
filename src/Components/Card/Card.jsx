import React from 'react'
import './Card.scss'



export default function Card(props) {
  return (
    <>
        <div className={props.className}>
            <div className="card__title">{props.title}</div>
            <div className="card__author">{props.author}</div>
            <img className='card__img' src={props.img} alt="img" />
        </div>
    </>
  )
}



