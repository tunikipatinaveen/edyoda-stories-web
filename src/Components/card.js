import React, { Component, useState } from 'react';
import './card.css'

const Card = (props) => {
    const [date, setDate] = useState(null)

    const showDate = () =>{
        const postedOn = props.card.posted_on;
        const dateOnly = postedOn.split('T');
        const date = dateOnly[0].split('-');
        const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']
        const finalMonth = month.filter((item,index) => index+1 == date[1] && month[index]);
        return `${date[2]} ${finalMonth} ${date[0]}`
    }

    return (<a href='#' className='card'>
        <img src={props.card.small_image} />
        <div className='card-container'>
            <h3>{props.card.title}</h3>
            <p className='author'>{props.card.authorname}<span> | {showDate()}</span></p>
            <p className='description'>{props.card.description}</p>
        </div>
    </a>);
}

export default Card;