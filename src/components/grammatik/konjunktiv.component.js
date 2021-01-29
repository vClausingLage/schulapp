import React, { useState } from 'react';
import Grammatik from '../grammatik.component';
import { KonjPraes, KonjImp, KonjPerf, KonjPlqPerf, KonjEsse, KonjHS } from './konjunktivcontainer.component';

const Konjunktiv = () => {
    const components = [<KonjPraes />, <KonjImp />, <KonjPerf />, <KonjPlqPerf />, <KonjEsse />, <KonjHS />];
    const [show, setShow] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    
    const items = ['Päsens','Imperfekt','Perfekt','Plusquamperfekt','esse','im Hauptsatz'];

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
            <h1>Konjunktiv</h1>
            <div className="flex" style={{justifyContent: 'center'}}>
                {renderedButtons}
            </div>
                <div className="component">{components[show]}</div>
            </div>
        </div> 
    )
}

export default Konjunktiv;