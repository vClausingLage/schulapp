import React, { useState } from 'react'

const CalcArea = () => {
    const [circle, setCircle] = useState()
    const [square, setSquare] = useState()
    const [triangle, setTriangle] = useState()
    const [input, setInput] = useState('Fläche eingeben')

    function calcInput(e) {
        e.preventDefault()
        setCircle(Math.sqrt(input * 4 * Math.PI).toFixed(2))
        setSquare((Math.sqrt(input) * 4).toFixed(2))
        setTriangle((Math.sqrt(input / (Math.sqrt(3)/4)) * 3).toFixed(2))
    }

    return (
        <div className="container">
        <h1>das Problem Didos</h1>
        <p>
            Gib eine beliebige Fläche ein, um zu sehen, dass Dido schlau gehandelt hat, als sie die Kuhhaut in einem Kreis ausgelegt hat. <br></br>Drücke dann ENTER.
        </p>
        <form onSubmit={e => calcInput(e)}>
            <input 
            style={{color: 'gray'}}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onFocus={e => setInput(input > 0 ? input:e.target.value=null)}
            onBlur={e => setInput(input > 0 ? input:'Fläche eingeben')}
            />
        </form>
        <div>
            <p>Kreis: {circle > 0 ? circle : ''} {input > 0 ? 'cm' : ''}</p>
            <p>Rechteck: {square > 0 ? square : ''} {input > 0 ? 'cm' : ''}</p>
            <p>Dreieck: {triangle > 0 ? triangle : ''} {input > 0 ? 'cm' : ''}</p>
        </div>
        </div>
    )
}

export default CalcArea