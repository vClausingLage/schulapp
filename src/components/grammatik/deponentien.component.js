import React from 'react';
import Grammatik from '../grammatik.component';

const Deponentien = () => {
    return (
        <div>
        <Grammatik />
        <div className="container">
        <h1>Deponentien</h1>
        <h2>Definition</h2>
        <p>Deponentien sind Verben, deren lateinische Form <b>passiv</b> ist, deren deutsche Übersetzung jedoch <b>aktivisch</b> ist.</p>
        <h2>Beispiel</h2>
        <p><i>sequi, sequor, secutus sum</i>: folgen</p>
        <p>Im Gegensatz zu den übrigen Verben, werden bei Deponentien als Stammformen der Infinitiv Präsens, die 1. Pers. Präs. und die 1. Pers. Perf. angegeben (also <b>kein PPP</b>).</p>
        <h2>wichtige Deponentien</h2>
        <table className="table">
        <tbody><tr><td><strong>queri</strong>, queror, questus sum</td><td>klagen</td></tr>
        <tr>
        <td><strong>loqui</strong>, loquor, locutus sum</td>
        <td>sprechen</td>
        </tr>
        <tr>
        <td><strong>sequi</strong>, sequor, secutus sum</td>
        <td>folgen</td>
        </tr>
        <tr>
        <td>frui, fruor</td>
        <td>genießen<br />
        </td>
        </tr>
        <tr>
        <td><strong>uti</strong>, utor, usus sum</td>
        <td>gebrauchen (+ Abl.)</td>
        </tr>
        <tr>
        <td>niti, nitor, nisus/nixus sum</td>
        <td>sich stützen</td>
        </tr>
        <tr>
        <td><strong>amplecti</strong>, amplector, amplexus sum</td>
        <td>umfassen, umarmen</td>
        </tr>
        <tr>
        <td><strong>labi</strong>, labor, lapsus sum</td>
        <td>rutschen, fallen</td>
        </tr>
        <tr>
        <td><strong>nasci</strong>, nascor, natus sum</td>
        <td>geboren werden</td>
        </tr>
        <tr>
        <td>nancisci, nanciscor, nactus sum</td>
        <td>erlangen</td>
        </tr>
        <tr>
        <td><strong>ulcisci</strong>, ulciscor, ultus sum</td>
        <td>rächen</td>
        </tr>
        <tr>
        <td><strong>irasci</strong>, irascor, iratus sum</td>
        <td>zürnen, grollen</td>
        </tr>
        <tr>
        <td><strong>adipisci</strong>, adipiscor, adeptus sum</td>
        <td>erlangen, erreichen</td>
        </tr>
        <tr>
        <td><strong>proficisci</strong>, proficiscor, profectus sum</td>
        <td>aufbrechen, abreisen</td>
        </tr>
        <tr>
        <td>reminisci, reminiscor </td>
        <td>sich erinnern</td>
        </tr>
        <tr>
        <td><strong>oblivisci</strong>, obliviscor, oblitus sum</td>
        <td>vergessen</td>
        </tr>
        <tr>
        <td><strong>oriri</strong>, orior, ortus sum</td>
        <td>entstehen (<em>sole oriente</em> bei Sonnenaufgang)</td>
        </tr>
        <tr>
        <td><strong>mori</strong>, morior, mortuus sum</td>
        <td>sterben</td>
        </tr>
        <tr>
        <td><strong>pati</strong>, patior, passus sum</td>
        <td>(er-)leiden, erdulden</td>
        </tr>
        <tr>
        <td>gradi, gradior, gressus sum</td>
        <td>gehen, schreiten (<em>aggredi</em> angreifen)</td>
        </tr>
        </tbody>
        </table>
        </div>
        </div>
    )
}

export default Deponentien;