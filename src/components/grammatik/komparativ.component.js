import React from 'react';
import Grammatik from '../grammatik.component';

const Komparativ = () => {
    return (
        <div>
        <Grammatik />
        <div className="container">
            <h1>Steigerung</h1>
            <h2>Positiv</h2>
            <p>Der sogenannte Positiv ist die Grundform des Adjektivs.</p>
            <div className="gramm-cont">
                <ul>
                    <li>iucundus, -a, -um: fröhlich</li>
                    <li>longus, -a, -um: lang, weit</li>
                </ul>
            </div>
            <h2>Komparativ</h2>
            <p><b>Bildung</b>: -ior, -ius / <b>Adverb</b> -ius <br></br>Beispiel: </p>
            <div className="gramm-cont">
                <ul>
                    <li>iucundior, iucundior, iucundius (Genitiv nach der Konsonantischen)</li>
                    <li>longior, longior, longius</li>
                    </ul>
            </div>
            <p>Der Vergleich wird durch quam oder einem <i>Ablativus Comparationis</i> ausgedrückt:</p>
            <ul>
                <li>iucundior quam mea amica sum</li>
                <li>Rhenus longior quam Sequana est</li>
                <li>Caesar maior Cicerone erat</li>
            </ul>
            <h2>Superlativ</h2>
            <p><b>Bildung</b>: -issimus, -a, -um / Adverb -e <br></br>
                Beispiel:</p>
            <div className="gramm-cont">
                <ul>
                    <li>iucundissimus, iucundissima, iucundissimum</li>
                    <li>longissimus, longissima, longissimum</li>
                </ul>
            </div>
            <p>Der Vergleich mit anderen wird durch einen Genitiv ausgedrückt:
            </p>
            <ul>
                <li>fortissimum omnium animalium</li>
            </ul>
            <p>Adjektive auf -lis (facilis, similis …) haben den Superlativ auf -illimus (faci<b>ll</b>imus/a/um …)</p>
            <p>Adjektive auf -er (asper, celer …) haben den Superlativ auf -errimus (cele<b>rr</b>imus/a/um …)</p>
            <h2>Elativ</h2>
            <p>Der Elativ ist eine Art und Weise (keine lateinische Form!), den Komparativ oder Superlativ ohne Vergleich zu übersetzen (mit <b>ziemlich</b> oder <b>sehr</b>):</p>
            <ul>
                <li>Caesar statura maximus erat – Caesar war von sehr hoher Gestalt</li>
                <li>Cicero prudentior erat – Cicero war ziemlich klug</li>
            </ul>
            <h2>spezielle Bildungen</h2>
            <table className="table" style={{maxWidth: '50%'}}>
            <tbody>
                <tr><th>Positiv</th><th>Komparativ</th><th>Superlativ</th></tr>
                <tr><td>magnus, -a, -um</td><td>maior, maius</td><td>maximus, -a, -um</td></tr>
                <tr><td>parvus, -a, -um</td><td>minor, minus</td><td>minimus, -a, -um</td></tr>
                <tr><td>bonus, -a, -um</td><td>melior, -ius</td><td>optimus, -a, -um</td></tr>
                <tr><td>malus, -a, -um</td><td>peior, peius</td><td>pessimus, -a, -um</td></tr>
            </tbody>
            </table>

            <h2>besondere Bedeutungen</h2>

            <table className="table" style={{maxWidth: '30%'}}>
                <tbody>
                <tr><td>multi – plures – plurimi</td><td>sehr viele/die meisten</td></tr>
                <tr><td>multum – plus – plurimum</td><td>viel</td></tr>
                </tbody>
            </table>

            <h2>Motto der Olympischen Spiele:</h2>

            <p className="olympus">Citius – Altius – Fortius</p>
        </div>
        </div>
    )
}

export default Komparativ;