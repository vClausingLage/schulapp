import React, { useState } from 'react';
import { AktPraes, AktFut, AktImp, AktPerf } from './verbencontainer.component';
import Grammatik from '../grammatik.component';

const Aktiv = () => {
    const components = [<AktPraes />, <AktFut />, <AktImp />, <AktPerf />];
    const [show, setShow] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    
    const items = ['Päsens', 'Futur I','Imperfekt','Perfekt'];

    function clickButton(index){
        setShow(index);
        setActiveIndex(index);
    }

    const renderedButtons = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';
        return <div key={items.indexOf(item)} className={`butn ${active}`} onClick={() => clickButton(items.indexOf(item))}>{item}</div>
    });



    return (
        <div>
            <Grammatik />
            <div className="container">
            <h1>Aktiv</h1>
            <div className="flex" style={{justifyContent: 'center'}}>
                {renderedButtons}
            </div>
            <div className="component">{components[show]}</div>
        </div>
        </div>
    )
}

export default Aktiv;