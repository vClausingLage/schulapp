import React from 'react';

const KonjPraes = () => {
    return(
    <div id="konjPraes" >
            <div class="grammatik">
                <p><span className="emphasis">Regel:</span> Das Kennzeichen des Konjunktiv Präsens ist das <b>a</b>, außer in der a-Konjugation, da ist es da <b>e</b>.</p>
            </div>
            <div className="grid-item">
            <table className="tableV"><tbody>
                <tr>
                <th></th><th>Singular</th><th>Plural</th>
                </tr>
                <tr>
                <td>1</td><td>dicam</td><td>dicamus</td>
                </tr>
                <tr>
                <td>2</td><td>dicas</td><td>dicatis</td>
                </tr>
                <tr>
                <td>3</td><td>dicat</td><td>dicant</td>
                </tr>
            </tbody></table>
            </div>
            </div>
)}

const KonjImp = () => {
    return(
    <div id="konjImp" >
            <div class="grammatik">
                <p><span className="emphasis">Regel:</span> Der Konjunktiv Imperfekt wird aus dem <b>Infinitiv Präsens</b> und den <b>Personalendungen des Imperfekts</b> (-m, -s, -t, -mus, -tis, -nt) gebildet.</p>
            </div>
            <div className="grid-item">
            <table className="tableV"><tbody>
                <tr>
                <th></th><th>Singular</th><th>Plural</th>
                </tr>
                <tr>
                <td>1</td><td>dicerem</td><td>diceremus</td>
                </tr>
                <tr>
                <td>2</td><td>diceres</td><td>diceretis</td>
                </tr>
                <tr>
                <td>3</td><td>diceret</td><td>dicerent</td>
                </tr>
            </tbody></table></div>
            </div>
)}

const KonjPerf = () => {
    return (
    <div id="konjPerf" >
            <div class="grammatik">
                <p><span className="emphasis">Regel:</span> Perfektstamm + -erim, -eris,- erit, -erimus, -eritis, -erint</p>
            </div>
            <div className="grid-item">
            <table className="tableV"><tbody>
                <tr>
                <th></th><th>Singular</th><th>Plural</th>
                </tr>
                <tr>
                <td>1</td><td>dixerim</td><td>dixerimus</td>
                </tr>
                <tr>
                <td>2</td><td>dixeris</td><td>dixeritis</td>
                </tr>
                <tr>
                <td>3</td><td>dixerit</td><td>dixerint</td>
                </tr>
            </tbody></table></div>
            </div>
)}

const KonjPlqPerf = () => {
    return (
        <div id="konjPlqperf" >
            <div class="grammatik">
                <p><span className="emphasis">Regel:</span> Der Konjunktiv Plusquamperfekt bildet sich aus dem <b>Infinitiv Perfekt + Endungen des Imperfekt</b>.</p>
            </div>
            <div className="grid-item">
            <table className="tableV"><tbody>
                <tr>
                <th></th><th>Singular</th><th>Plural</th>
                </tr>
                <tr>
                <td>1</td><td>dixissem</td><td>dixissemus</td>
                </tr>
                <tr>
                <td>2</td><td>dixisses</td><td>dixissetis</td>
                </tr>
                <tr>
                <td>3</td><td>dixisset</td><td>dixissent</td>
                </tr>
            </tbody></table></div>
            </div>
)}

const KonjEsse = () => {
    return (
        <div id="konjEsse" >
            <div className="grid-item">
            <table className="tableV"><tbody>
                <tr>
                <th></th><th>Singular</th><th>Plural</th>
                </tr>
                <tr>
                <td>1</td><td>sim</td><td>simus</td>
                </tr>
                <tr>
                <td>2</td><td>sis</td><td>sitis</td>
                </tr>
                <tr>
                <td>3</td><td>sit</td><td>sint</td>
                </tr>
            </tbody></table></div>
            </div>
    )
}

const KonjHS = () => {
    return (
        <div id="konjHaSa" >
        <p>
            Steht ein Prädikat in einem Hauptsatz im Konjunktiv, so muss dieser Konjunktiv übersetzt werden. Dazu gibt es mehrere Möglichkeiten:
        </p>
        <h2>Konjunktiv als Modus des Wunsches (<b>Optativ</b>)</h2>
        <p>Der Optativ hat seinen Namen von lat. <i>optare (wünschen)</i>. Er steht im Konjunktiv und oft mit einem der beiden Beiwörter <i>utinam</i> oder <i>vellem</i> (die beiden Beiwörter werden bei der Übersetzung ignoriert). </p>
            <p>Bei der Übersetzung musst du darauf achten, dass man im Deutschen den Wunsch mit <b>doch</b> oder <b>hoffentlich</b> widergibt. </p>
            <p>Beispiele:</p>
        <table className="tableV"><tbody>
            <tr>
            <td>Valeas!</td><td>Hoffentlich bleibst du gesund!</td>
            </tr>
            <tr>
            <td>Vellem maneas!</td><td>Bleib doch bitte!</td>
            </tr>
            <tr>
            <td>Vellem maneres!</td><td>Wärst Du doch geblieben!</td>
            </tr>
        </tbody></table>
        <p>Wie du an den beiden letzten Beispielen siehst, ist der Wunsch im Konjunktiv Präsens <i>erfüllbar</i> und der zweite <i>unerfüllbar</i>.</p>
        <h2>Konjunktiv als Modus der Aufforderung</h2>
        <h3>Hortativ</h3>
        <p>Der Hortativ (von <i>hortari</i>, auffordern) ist eine Aufforderung an die <b>1. Person Plural</b>:</p>
        <table className="tableV"><tbody>
            <tr>
            <td>eamus!</td><td>Lasst uns gehen!</td>
            </tr>
            <tr>
            <td>gaudeamus</td><td>Lasst uns fröhlich sein!</td>
            </tr>
        </tbody></table>
        <h3>Iussiv</h3>
        <p>Der Iussiv (von <i>iubere</i>, befehlen) ist eine Befehlsform an die <b>3. Person Singualr und Plural</b> (wie ein Imperativ, nur an die 3. Person). </p>
        <table className="tableV"><tbody>
            <tr>
            <td>Alios servet!</td><td>Man soll die anderen retten!</td>
            </tr>
            <tr>
            <td>Caveant!</td><td>Sie sollen sich hüten!</td>
            </tr>
        </tbody></table>
        <h3>Prohibitiv</h3>
        <p>Der Prohibitiv richtet sich an die <b>2. Person Singular und Plural</b>. Er ist ein <b>verneinter Imperativ</b>. Er wird mit <b>ne</b> eingeleitet. </p>
        <table className="tableV"><tbody>
            <tr>
            <td>Ne dubitaveris!</td><td>Du sollst nicht zögern!</td>
            </tr>
            <tr>
            <td>Ne me exspectaveris!</td><td>Du sollst mich nicht erwarten!</td>
            </tr>
        </tbody></table>
        </div>
    )
}


export { KonjPraes, KonjImp, KonjPerf, KonjPlqPerf, KonjEsse, KonjHS };