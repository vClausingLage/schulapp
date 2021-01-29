import React, { useState } from 'react';
import Grammatik from '../grammatik.component';
import ppa from '../pictures/grammatik/ppa.png';
import ppp from '../pictures/grammatik/ppp.png';

const Partizip = () => {
    const PPA = () => {
        return (
            <div>
            <h2>PPA – Partizip Präsens Aktiv</h2>
            <p>Das PPA wird wie die Substantive auf -ns gebildet (mons, pons, fons…). Im Deutschen erkennst du es an einem -nd. Es ist im Deutschen selten, findet sich aber in folgenden Wendungen:</p>
            <p>‚der springe<b>nd</b>e Punkt‘</p>
            <p>‚die laufe<b>nd</b>en Kosten‘</p>
            <p>‚die drohe<b>nd</b>e Gefahr</p>
            <h3>Formen</h3>
            <p>Das PPA erkennt man an der Endung -ns/-nt-. Es wird dekliniert wie die Substantive auf -ns (mons, montis/pons, pontis/fons, fontis).</p>
                <img alt="PPA" src={ppa} />
            <h3>Übersetzung</h3>
            <p>Da das Partizip im Präsens im Deutschen sehr selten ist, sollte man es in der Übersetzung mit einer Form wiedergeben, die im Deutschen geläufiger ist. Dazu kann man sich zu einer der folgenden Möglichkeiten entscheiden.</p>
            <p>a) Attribut</p>
            <p>Icarus clamans in mare cecidit.</p>
            <p>Ikarus ist schreiend ins Meer gefallen. </p>
            <p>b) Man behandelt das Partizip wie ein gewöhnliches Prädikat und verbindet es mit einem und mit dem Hauptsatz:</p>
            <p>Icarus clamans in mare cecidit.</p>
            <p>Ikarus ist schreiend ins Meer gefallen. → Ikarus schrie und fiel ins Meer.</p>
            <p>c) Man bildet einen Relativsatz:</p>
            <p>Icarus clamans in mare cecidit.</p>
            <p>Ikarus ist schreiend ins Meer gefallen. → Ikarus, der schrie, fiel ins Meer.</p>
            <p>d) Man kann das Partizip ebenfalls in einen Nebensatz verwandeln:</p>
            <p>Icarus clamans in mare cecidit.</p>
            <p>Ikarus ist schreiend ins Meer gefallen. → Während Ikarus schrie, ist er ins Meer gefallen.</p>
            <p>Dabei sind folgende Möglichkeiten denkbar (s. auch Kapitel Nebensätze):</p>
            <p>I. temporal: als, während</p>
            <p>II. kausal: weil, da</p>
            <p>III. modal: indem</p>
            <p>IV. konzessiv: obwohl</p>
            <p>Beachte, dass vom Partizip auch ein Objekt abhängen kann:</p>
            <p>Icarus <b>patrem</b> vocans in mare cecidit.</p>
            <p>Ikaraus ist seinen <b>Vater</b> rufend ins Meer gefallen.</p>
            </div>
        )
    }

    const PPP = () => {
        return (
            <div>
            <h2>PPP – Partizip Perfekt Passiv</h2>
            <p>Das PPP erkennt man im Deutschen an der Vorsilbe ge-: </p>
            <p>bauen – <b>ge</b>baut; lesen – <b>ge</b>lesen; fahren – <b>ge</b>fahren</p>
            <h3>Formen</h3>
            <p>Im Lateinischen erkennst du das PPP an der Endung -tus/-ta/-tum, die an den Stamm angehängt wird.</p>
                <img alt="PPP" src={ppp} />
            <h3>Übersetzung</h3>
            <p>Für die Übersetzung gelten die gleichen Möglichkeiten wie für das PPA:</p>
            <p>a) Attribut</p>
            <p>Europa a Iove capta in mare fugit.</p>
            <p>Die von Jupiter geraubte Europa floh ins Meer.</p>
            <p>b) zwei Hauptsätze</p>
            <p>Europa a Iove capta in mare fugit.</p>
            <p>Die von Jupiter geraubte Europa floh ins Meer. → Europa wurde von Jupiter geraubt und floh ins Meer.</p>
            <p>c) Relativsatz</p>
            <p>Europa a Iove capta in mare fugit.</p>
            <p>Die von Jupiter geraubte Europa floh ins Meer. → Europa, die von Jupiter geraubt wurde, floh ins Meer.</p>
            <p>d) adverbialer Nebensatz</p>
            <p>Europa a Iove capta in mare fugit.</p>
            <p>Die von Jupiter geraubte Europa floh ins Meer. → Nachdem Europa von Jupiter geraubt wurde, floh sie ins Meer.</p>
            </div>
        )
    }

    const PFA = () => {
        return (
            <div>
            <h2>PFA – Partizip Futur Aktiv</h2>
            <p>Ihr kennt bis jetzt zwei lateinische Formen des Partizips:</p>
            <ul>
            <li>das PPA (Partzizip Präsens Aktiv)</li>
            <li>das PPP (Partizip Perfekt Passiv)</li>
            </ul>
            <p>zur Wiederholung: Du kannst dir die wichtigsten Eckpunkte für die Partizipien wie folgt merken:</p>
            <ul>
            <li>PPA: im Lateinischen mit der Endung <b>-ns, ntis</b>, im Deutschen mit der Endung <b>-nd</b>: <br></br> Bsp.: lat. venie<b>ns</b>, dt. komme<b>nd</b></li>
            <li>PPP: im Lateinischen mit der Endung <b>-tus/-ta/-tum</b>, im Deutschen wird oft die Vorsilbe <b>ge-</b> vor das Partizip gestellt: <br></br> Bsp.: lat. fac<b>tus</b>, dt. <b>ge</b>tan</li>
            </ul>
            <p>Es gibt im Lateinischen noch ein weiteres Partizip. Es ist sehr selten und leicht zu erkennen: Es hat die Endungen <b>-(t)urus/-(t)ura/-(t)urum</b>. Man übersetzt es wie ein ganz normales Futur: Bsp.:</p>
            <ul>
                <li>ventus spiraturus: der Wind wird wehen</li>
                <li>auxilium adventurum: die Hilfe wird kommen</li>
                <li>pater scripturus: der Vater wird schreiben</li>
            </ul>
            <p>Man nennt dieses Partizip das Partizip Futur Aktiv <b>(PFA)</b>.</p>
            <p>Wörtlich müsste man ja (weil es ein Partizip ist) <i>ventus spiraturus</i> so übersetzen: 'der wehen werdende Wind'. Das klingt allerdings viel zu furchtbar. Daher ganz einfach wie ein Futur übersetzen.</p>
            </div>
        )
    }

    const components = [<PPA />, <PPP />, <PFA />];
    const [activeIndex, setActiveIndex] = useState(0);
    
    const items = ['PPA', 'PPP','PFA'];

    function clickButton(index){
        setActiveIndex(index);
    }

    const renderedButtons = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';
        return <div key={items.indexOf(item)} className={`butn ${active}`} onClick={() => clickButton(items.indexOf(item))}>{item}</div>
    });

    return(
        <div>
            <Grammatik />
            <div className="container">
            <h1>Partizip</h1>
            <div className="flex" style={{justifyContent: 'center'}}>
                {renderedButtons}
            </div>
            <div className="component">{components[activeIndex]}</div>
        </div>
        </div>
    )
}

export default Partizip;