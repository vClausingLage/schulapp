import React, { useState } from 'react';
import Grammatik from '../grammatik.component';

const Gerundium = () => {
    return (
        <div>
	    <h2>Gerundium</h2>
        <p>Das Gerundium ist ein Verbal<b>substantiv</b>. <br></br> Im Deutschen wird ein Verb substantiviert, indem man einen Artikel davor stellt und das Verb dann groß schreibt:</p>
        <ul>
            <li>leben &#8594; das Leben</li>
            <li>sehen &#8594; das Sehen</li>
            <li>lesen &#8594; das Lesen</li>
        </ul>
        <p>Im Lateinischen gibt es dafür eine eigene Form, das Gerundium. Es tritt nur im Genitiv, Akkusativ und Ablativ auf. <br></br><span className="emphasis">Achtung</span>: Der Nominativ des substantivierten Verbs im Lateinischen wird durch den Infinitiv gebildet:</p><p>Errare humanum est. &#8594; Irren ist menschlich.</p>

        <h3>Beispiele</h3>

        <p class="grammatik">
            Die Fälle werden genauso wie bei anderen Substantiven verwendet. <br></br>Eine Ausnahme ist der Akkusativ, der immer mit <b>ad</b> steht und mit <b>'um zu'</b> übersetzt wird.
        </p>
        <div className="flex">
        <div className="flex-item">
        <h4>Genitiv</h4>
        <ul>
            <li>ars dicendi</li>
            <li>ratio vivendi</li>
            <li>studium pugnandi</li>
            <li>bene vivendi cupidus</li>
        </ul>
        </div>
        <div className="flex-item">
        <h4>Akkusativ</h4>
        <ul>
            <li>ad discendum</li>
            <li>paratus ad dimicandum</li>
            <li>ad spectandum venire</li>
            <li>idoneus ad condendum</li>
        </ul>
        </div>
        <div className="flex-item">
        <h4>Ablativ</h4>
        <ul>
            <li>natando</li>
            <li>scribendo</li>
            <li>faciendo</li>
            <li>de bene vivendo disputare</li>
            <li>nihil agendo</li>
        </ul>
        </div>
        </div>
        </div>
    )
}

const GerundivEsse = () => {
    return(
        <div id="gerundivEsse">
        <h2>Gerundiv mit esse</h2>
        <p>	Die lateinische Sprache hat zwei Möglichkeiten, auszudrücken, dass etwas getan werden muss:</p>
        <ol>
            <li>mit <i>debere</i> oder <i>necesse est</i> (mit Infinitiv/AcI):</li>
                <ul>
                    <li>a) Multos labores suscipere debent. &#8594; Sie müssen viele Aufgaben übernehmen.</li>
                    <li>b) Necesse est multos labores suscipere. &#8594; Es ist nötig, viele Aufgaben zu übernehmen.</li>
                </ul>
            <li>mit einem Gerundivum + esse:</li>
                <ul>
                    <li>a) Epistula scribenda est.	&#8594;	Der Brief muss geschrieben werden.</li>
                    <li>b) Liber legendus est.		&#8594;	Das Buch muss gelesen werden.</li>
                    <li>c) Vulnera sananda sunt.	&#8594;	Die Wunden müssen geheilt werden.</li>
                </ul>
        </ol>
        <p class="grammatik">
            <span class="emphasis"><b>Regel</b></span> Das Gerundiv mit <i>esse</i> wird im Deutschen immer mit 'müssen + Passiv' wiedergegeben. In der Verneinung heißt es 'dürfen + Passiv'. <br></br> Es verhält sich also genauso wie das englische <i>must</i> und <i>must not</i>.
        </p>
        <h3>Cato der Ältere</h3>
        <p>
            Der römische Politiker Cato -- ein Feind der Karthager -- schloss jede Rede, die er im Senat hielt, mit den Worten
        </p>
        <p className="zitat">Ceterum censeo Carthaginem delendam esse. <br></br> <i>Im Übrigen glaube ich, dass Karthago zerstört werden muss.</i></p>
        <p>Durch die Sturheit, mit der er diese Forderung immer und immer wieder vortrug, ging er in die Geschichte ein.</p>
        </div>
    )
}

const Gerund = () => {
    const components = [<Gerundium />, <GerundivEsse />];
    const [show, setShow] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    
    const items = ['Gerundium', 'Gerundiv mit esse'];

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
            <h1>Gerundien</h1>
            <div className="flex" style={{justifyContent: 'center'}}>
                {renderedButtons}
            </div>
            <div className="component">{components[show]}</div>
        </div>
        </div>
    )
}

export default Gerund;