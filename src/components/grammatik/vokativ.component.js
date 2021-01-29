import React from 'react';
import Grammatik from '../grammatik.component';

const Vokativ = () => {
    return (
        <div>
        <Grammatik />
        <div className="container component">
            <h1>Vokativ</h1>
            <p>Im Lateinische gibt es den Vokativ, eine eigene Form, um jemanden anzureden. Die Form ist in der a-Deklination gleich wie der Nominativ. In der o-Deklination endet er auf -e und bei Namen auf -ius bleibt nur das -i übrig. </p>

            <p>Beeile dich, <b>Claudia</b>! Beeile dich, <b>Marcus</b>! Beile dich, <b>Lucius</b>! </p>
            <p>Propera, <b>Claudia</b>! Propera, <b>Marce</b>! Propera, <b>Luci</b>! </p>
        </div>
        </div>
    )
}

export default Vokativ;