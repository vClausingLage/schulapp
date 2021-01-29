import React from 'react';
import Grammatik from '../grammatik.component';

const Imperativ = () => {
    return (
        <div>
        <Grammatik />
        <div className="container component">
            <h1>Imperativ</h1>
            <p>Mit dem Imperativ werden im Lateinischen Befehle ausgedrückt. </p>
            <p><b>propera</b> beeile dich! <b>properate</b> beeilt euch! </p>
            <p><b>vide</b> schau! <b>videte</b> schaut! </p>
            <p><b>discede</b> geh weg! <b>discedite</b> geht weg! </p>
        </div>
        </div>
    )
}

export default Imperativ;