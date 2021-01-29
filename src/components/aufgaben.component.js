import React, { Fragment, useState } from 'react';

const Aufgaben = ({ fragen, antworten, heading, description }) => {
    const [input, setInput] = useState('');

    const fragenErstellen = () => {
        return (
            <div className=''>
                {fragen.map(frage => (
            <div className='' key={fragen.indexOf(frage)}><form id={fragen.indexOf(frage)} onSubmit={e => fragenPruefen(e)}><p>{frage}: <input onChange={e => setInput(e.target.value)} type='text'></input><span id={'answer' + fragen.indexOf(frage)} className=''></span></p></form></div>
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
            <div className='container'>
                <h1>{heading}</h1>
                <h2>{description}</h2>
                {fragenErstellen()}
            </div>
            <div>
                
            </div>
        </Fragment>
    )
}

export default Aufgaben;