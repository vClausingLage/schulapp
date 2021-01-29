import React, { useState } from 'react';
import Grammatik from '../grammatik.component';

const Stammformen = () => {

    const VPerfekt = () => {
        return(
            <div>
            <table className="table">
                <tbody>
                <tr><th colSpan="5">v-Perfekt</th></tr>
                <tr><td>petere</td><td>peto</td><td>petivi</td><td>petitum</td><td>fordern, angreifen</td></tr>
            </tbody></table>
        </div>
        )
    }
    const UPerfekt = () => {
        return (
            <div>
            <table className="table">
            <tbody>
                <tr><th colSpan="5">u-Perfekt</th></tr>
                <tr><td>diripere</td><td>diripo</td><td>diripui</td><td>direptum</td><td>plündern</td></tr>
            </tbody></table>
        </div>
        )
    }
    const SPerfekt = () => {
        return (
        <div>
            <table className="table">
            <tbody>
                <tr><th colSpan="5">s-Perfekt</th></tr>
                <tr><td>augere</td><td>augeo</td><td>auxi</td><td>auctum</td><td>vergrößern, vermehren</td></tr>
                <tr><td>cedere</td><td>cedo</td><td>cessi</td><td></td><td>gehen, nachgeben</td></tr>
                <tr><td>dicere</td><td>dico</td><td>dixi</td><td>dictum</td><td>sagen, sprechen</td></tr>
                <tr><td>ducere</td><td>duco</td><td>duxi</td><td>ductum</td><td>führen</td></tr>
                <tr><td>manere</td><td>maneo</td><td>mansi</td><td></td><td>bleiben</td></tr>
                <tr><td>mittere</td><td>mitto</td><td>misi</td><td>missum</td><td>schicken</td></tr>
                <tr><td>ridere</td><td>rideo</td><td>risi</td><td>risum</td><td>lachen</td></tr>
                <tr><td>scribere</td><td>scribo</td><td>scripsi</td><td>scriptum</td><td>schreiben</td></tr>
                <tr><td>sentire</td><td>sentio</td><td>sensi</td><td>sensum</td><td>fühlen, wahrnehmen</td></tr>
                <tr><td>torquere</td><td>torqueo</td><td>torsi</td><td>torsum</td><td>drehen quälen</td></tr>
                <tr><td>trahere</td><td>traho</td><td>traxi</td><td>tractum</td><td>ziehen, schleppen</td></tr>
                <tr><td>vivere</td><td>vivo</td><td>vixi</td><td></td><td>leben</td></tr>
            </tbody></table>
        </div>
        )
    }
    const RedPerfekt = () => {
        return (
            <div>
            <table className="table">
            <tbody>
                <tr><th colSpan="5">Reduplikationsperfekt</th></tr>        
                <tr><td>cadere</td><td>cado</td><td>cecidi</td><td></td><td>fallen</td></tr>
                <tr><td>currere</td><td>curro</td><td>cucurri</td><td>-</td><td>rennen, laufen, eilen</td></tr>
                <tr><td>dare</td><td>do</td><td>dedi</td><td>datum</td><td>geben</td></tr>
                <tr><td>occidere</td><td>occido</td><td>occidi</td><td></td><td>töten</td></tr>
                <tr><td>pellere</td><td>pello</td><td>pepuli</td><td>pulsum</td><td>schlagen, stoßen</td></tr>
                <tr><td>praestare</td><td>praesto</td><td>praestiti</td><td></td><td>geben, gewähren</td></tr>
                <tr><td>stare</td><td>sto</td><td>steti</td><td></td><td>stehen</td></tr>
            </tbody>
            </table>
        </div>
        )
    }
    const DehnPerfekt = () => {
        return (
            <div>
            <table className="table">
            <tbody>
                <tr><th colSpan="5">Dehnungsperfekt/ohne Stammveränderung</th></tr>
                <tr><td>agere</td><td>ago</td><td>egi</td><td>actum</td><td>tun, machen, führen</td></tr>
                <tr><td>capere</td><td>capo</td><td>cepi</td><td>captum</td><td>fangen, fassen</td></tr>
                <tr><td>comprehendere</td><td>comprehendo</td><td>comprehendi</td><td>comprehensum</td><td>verstehen, begreifen, ergreifen</td></tr>
                <tr><td>facere</td><td>facio</td><td>feci</td><td>factum</td><td>tun, machen</td></tr>
                <tr><td>interficere</td><td>interficio</td><td>interfeci</td><td>interfectum</td><td>töten</td></tr>
                <tr><td>movere</td><td>moveo</td><td>movi</td><td>motum</td><td>bewegen</td></tr>
                <tr><td>occidere</td><td>occido</td><td>occidi</td><td>occisum</td><td>töten</td></tr>
                <tr><td>relinquere</td><td>relinquo</td><td>reliqui</td><td>relictum</td><td>verlassen</td></tr>
                <tr><td>respondere</td><td>respondeo</td><td>respondi</td><td>responsum</td><td>antworten</td></tr>
                <tr><td>venire</td><td>venio</td><td>veni</td><td></td><td>gehen, kommen</td></tr>
                <tr><td>vertere</td><td>verto</td><td>verti</td><td>versum</td><td>drehen</td></tr>
                <tr><td>videre</td><td>video</td><td>vidi</td><td>visum</td><td>sehen</td></tr>
                <tr><td>vincere</td><td>vinco</td><td>vici</td><td>victum</td><td>siegen</td></tr>
            </tbody>
            </table>
        </div>
        )
    }
    const Ausnahmen = () => {
        return (
            <div>
                 <div >
            <table className="table">
                <tbody>
                <tr><th colSpan="5">ferre</th></tr>
                <tr><td>ferre</td><td>fero</td><td>tuli</td><td>latum</td><td>tragen, bringen</td></tr>
            </tbody>
            </table>
        </div>
        <div>
            <table className="table">
            <tbody>
                <tr><th colSpan="5">ire</th></tr>
                <tr><td>ire</td><td>eo</td><td>ii</td><td>itum</td><td>gehen, kommen</td></tr>
            </tbody>
            </table>
        </div>
        </div>
        )
    }


    const components = [<VPerfekt />, <UPerfekt />, <SPerfekt />, <RedPerfekt />, <DehnPerfekt />, <Ausnahmen />];
    const [activeIndex, setActiveIndex] = useState(0);

    const items = ['v-Perfekt','u-Perfekt','s-Perfekt','Reduplikationsperfekt','Dehnungsperfekt','ferre & ire'];
    
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
            <h1>Stammformen unregelmäßiger Verben</h1>
            <div className="flex" style={{justifyContent: 'center'}}>
                {renderedButtons}
            </div>
            <div className="component">
                {components[activeIndex]}
            </div>
        </div>
        </div>
    )
}

export default Stammformen;