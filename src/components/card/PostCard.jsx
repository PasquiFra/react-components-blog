import './genericCard.scss'
import postPic from '../../assets/power-grid.jpeg'
import React, { useState } from 'react';


const Card = () => {
    const paragraph = "Nel contesto sempre più critico dell\'energia, ottimizzare l\'efficienza delle reti elettriche è diventato un obiettivo prioritario. Per garantire una distribuzione efficiente e sostenibile dell\'energia è fondamentale che il carico sulla rete elettrica sia mantenuto quanto più costante possibile. Anche se in un primo momento potrebbe essere contro intuitivo,  è infatti preferibile che il carico della rete si attesti intorno al suo carico medio piuttosto che avere picchi di richiesta e momenti di calma piatta. Un carico costante sulla rete elettrica comporta numerosi vantaggi. Aiuta a minimizzare le dispersioni e a ottimizzare l\'efficienza operativa complessiva, contribuisce a preservare la vita utile degli apparati e a minimizzare la necessità di manutenzione frequente, riduce i potenziali impatti negativi sulla fornitura di energia (blackout) e consente di ottimizzare le infrastrutture, riducendo la necessità di investimenti non pianificati. Questi punti sono già stati sollevati più volte dai gestori delle reti americane che hanno accolto di buon grado l\'arrivo dei miner. Il tutto però sottostà ad una condizione, ovvero che i miner riducano la loro domanda sulla rete nei momenti in cui c\'è o si prevede un picco.Il video quindi è la riprova che questa simbiosi non solo è possibile, ma è quello che accade realmente, con reciproco beneficio di tutte le parti coinvolte."
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
                <img src={postPic} alt="" />
            </figure>
            <h3>Stabilizzare una rete elettrica grazie a Bitcoin</h3>
            <p>
                {isAbstract ? intro(paragraph) : paragraph}
                <span>
                    {isAbstract && <button id='readMore' onClick={() => handleReadMore(false)}>...Leggi tutto l'articolo</button>}
                    {!isAbstract && <button id='readLess' onClick={() => handleReadMore(true)}>...Mostra meno</button>}
                </span>
            </p>
            <div>

            </div>
        </div>
    )
}

export default Card
