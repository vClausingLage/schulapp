import React, { Fragment, useState } from 'react';

const Klasse7a = () => {
    const [input, setInput] = useState('');
    const heading = 'Aufgaben';
    const description = 'Tausche bei den Verben Singular und Pural. Behalte die Person bei:';
    const fragen = ['pareo', 'mones', 'doleo', 'tacent', 'terret', 'augemus', 'doletis'];
    const antworten = ['paremus', 'monetis', 'dolemus', 'tacet', 'terrent', 'augeo', 'doles'];

    const fragenErstellen = () => {
        return (
            <div className='w3-card-2'>
                {fragen.map(frage => (
            <div className='w3-padding' key={fragen.indexOf(frage)}><form id={fragen.indexOf(frage)} onSubmit={e => fragenPruefen(e)}><p>{frage}: <input onChange={e => setInput(e.target.value)} type='text'></input><span id={'answer' + fragen.indexOf(frage)} className='w3-margin-left'></span></p></form></div>
            ))}
            </div>
        );
    }

    const fragenPruefen = (e) => {
        e.preventDefault();
        let id = e.target.id;
        if(antworten[id] === input.trim().toLowerCase()){
            document.getElementById('answer' + id).innerHTML = 'gut! &#129321;';
        } else {
            document.getElementById('answer' + id).innerHTML = 'leider falsch &#128584; versuch es nochmal!';
        }
    }

    return (
        <Fragment>
            <div className='w3-container'>
                <h1>{heading}</h1>
                <h2>{description}</h2>
                <h3>bestätige mit Enter</h3>
                {fragenErstellen()}
            </div>
            <div>
                
            </div>
        </Fragment>
    )
}

export default Klasse7a;