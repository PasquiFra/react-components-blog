import './genericCard.scss'
import React, { useState } from 'react';


const Card = (props) => {
    const paragraph = props.post.content
    const intro = (paragraph) => {
        return paragraph.split(" ").slice(0, 40).join(" ")
    };
    const [isAbstract, setIsAbstract] = useState(true);

    const handleReadMore = (boolean) => {
        setIsAbstract(boolean);
    };

    return (
        <div className='card p-3'>
            <figure>
                <img src={props.post.image} alt="img" />
            </figure>
            <h3>{props.post.title}</h3>
            <p>
                {isAbstract ? intro(paragraph) : paragraph}
                <span>
                    {isAbstract && <button id='readMore' onClick={() => handleReadMore(false)}>...Leggi tutto l'articolo</button>}
                    {!isAbstract && <button id='readLess' onClick={() => handleReadMore(true)}>...Mostra meno</button>}
                </span>
            </p>
        </div>
    )
}

export default Card
