import React, { Fragment } from 'react';
import Grammatik from '../grammatik.component';

const Praepositionen = () => {
    return (
        <Fragment>
            <Grammatik />
            <div className="container">
            <h1>Präpositionen</h1>

            <div><p>Diese ‚kleinen Wörter‘ stehen immer vor dem Wort/den Wörtern, auf die sie wirken: Alle Präpositionen stehen mit einem bestimmten Fall, am häufigsten mit Akkusativ oder Ablativ. Wenn eine Präposition mit zwei Fällen stehen kann (wie <b>in</b>), hat sie dadurch unterschiedliche Bedeutungen, wobei der Akkusativ häufig eine Richtung, der Ablativ häufig einen Ort oder Zeitpunkt bestimmt:</p></div>

            <div className="flex">
            <div className="flex-item">
            <table className="table">
            <tbody>
                <tr><th>mit Ablativ</th><th>Übersetzung</th></tr>
                <tr ><td>a/ab</td><td>aus, von ... her</td></tr>
                <tr ><td>e/ex</td><td>aus, heraus</td></tr>
                <tr ><td>de</td><td>von ... her</td></tr>
                <tr ><td>in</td><td>in</td></tr>
                <tr ><td>cum</td><td>mit</td></tr>
                <tr ><td>sine</td><td>ohne</td></tr>
            </tbody>
            </table>
            </div>
            <div className="flex-item">
            <table className="table">
            <tbody>
                <tr><th>mit Akkusativ</th><th>Übersetzung</th></tr>
                <tr ><td>ad</td><td>zu, hin, gegen</td></tr>
                <tr ><td>in</td><td>in ... hinein, zu</td></tr>
                <tr ><td>apud</td><td>bei</td></tr>
                <tr ><td>prope</td><td>nahe ... bei</td></tr>
                <tr ><td>inter</td><td>zwischen</td></tr>
                <tr ><td>per</td><td>durch</td></tr>
                <tr ><td>ante</td><td>vor</td></tr>
                <tr ><td>post</td><td>hinter</td></tr>
            </tbody>
            </table>
            </div>
            </div>

            <p>Du solltest darauf achten, dass Präpositionen auch zwischen zwei Wörtern stehen können, wenn das Substantiv noch ein Adjektiv dabei hat:</p>
            <div className="w3-light-blue w3-padding w3-margin">
            <ul>
                <li><b>qua</b> de <b>causa</b> – aus diesem Grund</li>
                <li><b>omnibus</b> ex <b>partibus</b> terrae – aus allen Teilen der Erde</li>
            </ul>
            </div>
        </div>
        </Fragment>
    )
}

export default Praepositionen;