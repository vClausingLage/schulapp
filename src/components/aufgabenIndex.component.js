import React, { Fragment, useState } from 'react';
import Aufgaben from './aufgaben.component';
import Contest from './contest.component';

const AufgabenIndex = () => {
    const [k7a, setK7a] = useState(false);
    const [k9a, setK9a] = useState(false);
    const [k10a, setK10a] = useState(false);
    const [k10b, setK10b] = useState(false);
    const [k11, setK11] = useState(false);
    const [k12, setK12] = useState(false);
    const [cont, setCont] = useState(false);

    // Image Crop : convert -crop X%xY% bild.png bild2.png

    const heading = 'Aufgaben';
    const description7a = 'Setze das angegebene Wort in den Genitiv (bestätige mit Enter):';
    const fragen7a = ['via', 'lacrima', 'avus', 'equi', 'puellae'];
    const antworten7a = ['viae', 'lacrimae', 'avi', 'equorum', 'puellarum'];
    const description9a = 'bilde die entsprechenden Formen:';
    const fragen9a = ['tenere (3.Pers.Sg.Präs.)','tenere (1.Pers.Pl.Imperfekt)','laudare (2.Pers.Sg.Imperfekt)','laudare (1.Pers.Sg.Perfekt)','dicere (3.Pers.Pl.Perfekt)','mittere (2.Pers.Sg.Imperfekt', 'mittere (2.Pers.Sg.Perfekt'];
    const antworten9a = ['tenet', 'tenebamus','laudabas','laudavi','dixerunt','mittebas','misisti'];
    const description10a = 'setzte ins Passiv:';
    const fragen10a = ['audio','amas','amabit','monet','monebunt','audient','dicet','laudabas','amabis'];
    const antworten10a = ['audior','amaris','amabitur','monetur','monebuntur','audientur','dicetur','laudabaris','amaberis'];
    const description10b = 'Wiedehole die Formen des Plusquamperfekt (L10 F3) und setze die Formen ins Plusquamperfekt:'
    const fragen10b = ['sperat','putant','potes','desperamus','narras','capitis','amittunt','cadit'];
    const antworten10b = ['speraverat','putaverant','potueras','desperaveramus','narraveras','ceperatis','amiserant','ceciderat'];
    const description11 = 'Wiederhole die Perfektbildung und setze folgende Formen ins Perfekt:'
    const fragen11 = ['audio','pugnat','terret','superat','capitis','persuadunt','petit','relinquis','iubent','recedimus'];
    const antworten11 = ['audivi','pugnavit','terruit','superavit','cepistis','persuaserunt','petivit','reliquisti','iusserunt','recessimus'];
    const description12 = 'setze die Formen in den Konjunktiv:';
    const fragen12 = ['vexat (Konj. Präs.)','vexatis (Konj. Imperf.)','vexant (Konj. Perfekt)','cogit (Konj. Imperfekt)','cogitis (Konj. Präs.)','mones (Konj. Imperf.)','moneo (Konj. Plusquamperf.)','monent (Konj. Präs.)','perdit (Konj. Perf.)','volo (Konj. Imperf.)','volumus (Konj. Plusquamperf.)','cogo (Konj. Plusquamperf.)'];
    const antworten12 = ['vexet','vexaretis','vexaverint','cogeret','cogatis','moneres','monuissem','moneant','perdiderit','vellem','voluissemus','coegissem'];

    const headingQuiz = 'Quiz';
    const descriptionQuiz = 'Wie im Frühjahr auch, habe ich einen Gegenstand aus meiner Wohnung fotografiert, der sich nun unten hinter den blauen Feldern verbirgt. Durch Beantworten der Fragen kann man ihn aufdecken.'

    function fk7a(){
        setK7a(true);
        setK9a(false);
        setK10a(false);
        setK10b(false);
        setK11(false);
        setK12(false);
        setCont(false);
    }

    function fk9a(){
        setK7a(false);
        setK9a(true);
        setK10a(false);
        setK10b(false);
        setK11(false);
        setK12(false);
        setCont(false);
    }
    function fk10a(){
        setK7a(false);
        setK9a(false);
        setK10a(true);
        setK10b(false);
        setK11(false);
        setK12(false);
        setCont(false);
    }
    function fk10b(){
        setK7a(false);
        setK9a(false);
        setK10a(false);
        setK10b(true);
        setK11(false);
        setK12(false);
        setCont(false);
    }
    function fk11(){
        setK7a(false);
        setK9a(false);
        setK10a(false);
        setK10b(false);
        setK11(true);
        setK12(false);
        setCont(false);
    }
    function fk12(){
        setK7a(false);
        setK9a(false);
        setK10a(false);
        setK10b(false);
        setK11(false);
        setK12(true);
        setCont(false);
    }
    function cont9(){
        setK7a(false);
        setK9a(false);
        setK10a(false);
        setK10b(false);
        setK11(false);
        setK12(false);
        setCont(true);
    }

    return (
        <Fragment>
            <h3>wähle deine Klasse</h3>
            <div className="flexnav">
                <div className='butn' onClick={fk7a}>Klasse 7a</div>
                <div className='butn' onClick={fk9a}>Klasse 9a</div>
                <div className='butn' onClick={fk10a}>Klasse 10a</div>
                <div className='butn' onClick={fk10b}>Klasse 10b</div>
                <div className='butn' onClick={fk11}>Klasse 11</div>
                <div className='butn' onClick={fk12}>Klasse 12</div>
                <div className='butn' onClick={cont9}>Quiz Klasse 9</div>
            </div>
            <div>
                <div>
                    {k7a && <Aufgaben description={description7a} fragen={fragen7a} antworten={antworten7a} heading={heading}/>}
                </div>
                <div >
                    {k9a && <Aufgaben description={description9a} fragen={fragen9a} antworten={antworten9a} heading={heading}/>}
                </div>
                <div >
                    {k10a && <Aufgaben description={description10a} fragen={fragen10a} antworten={antworten10a} heading={heading}/>}
                </div>
                <div >
                    {k10b && <Aufgaben description={description10b} fragen={fragen10b} antworten={antworten10b} heading={heading}/>}
                </div>
                <div >
                    {k11 && <Aufgaben description={description11} fragen={fragen11} antworten={antworten11} heading={heading}/>}
                </div>
                <div>
                    {k12 && <Aufgaben description={description12} fragen={fragen12} antworten={antworten12} heading={heading}/>}
                </div>
                <div>
                    {cont && <Contest description={descriptionQuiz} heading={headingQuiz} />}
                </div>
            </div>
        </Fragment>
    )
}

export default AufgabenIndex;