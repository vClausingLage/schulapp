import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Grammatik = () => {
    return (
        <Fragment>
        <div className="container">
        <div className="grammatik-panel">
        <div className="grid">
        <div className="grid-item">
            <header className="container">
                <h2>Substantive & Adjektive</h2>
            </header>
            <div className="flexnav">
                <Link to='/grammatik/komparativ' className="butn">Komparation</Link>
                <Link to='/grammatik/praepositionen' className="butn">Präpositionen</Link>
                <Link to='/grammatik/vokativ' className="butn">Vokativ</Link>
            </div>
        </div>

        <div className="grid-item">
            <header className="container">
                <h2>Verben</h2>
            </header>
            <div className="flexnav">
                <Link to='/grammatik/aktiv' className="butn">Aktiv</Link>
                <Link to='/grammatik/passiv' className="butn">Passiv</Link>
                <Link to='/grammatik/kleineverben' className="butn">kleine Verben</Link>
                <Link to='/grammatik/stammformen' className="butn">Stammformen</Link>
                <Link to='/grammatik/konjunktiv' className="butn">Konjunktiv</Link>
                <Link to='/grammatik/partizip' className="butn">Partizip</Link>
                <Link to='/grammatik/gerund' className="butn">Gerund</Link>
                <Link to='/grammatik/deponentien' className="butn">Deponentien</Link>
                <Link to='/grammatik/imperativ' className="butn">Imperativ</Link>
            </div>
        </div>
        </div>
        </div>
        </div>
        </Fragment>
    )
}

export default Grammatik;