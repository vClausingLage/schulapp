import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Index from './components/index.component';
import Header from './components/header.component';
import Footer from './components/footer.component';
import Grammatik from './components/grammatik.component';
// Grammatik
import Komparativ from './components/grammatik/komparativ.component.js';
import Praepositionen from './components/grammatik/praepositionen.component';
import Vokativ from './components/grammatik/vokativ.component';
import Imperativ from './components/grammatik/imperativ.component';
import Aktiv from './components/grammatik/aktiv.component';
import Passiv from './components/grammatik/passiv.component';
import KleineVerben from './components/grammatik/kleineverben.component';
import Stammformen from './components/grammatik/stammformen.component';
import Konjunktiv from './components/grammatik/konjunktiv.component';
import Partizip from './components/grammatik/partizip.component';
import Gerund from './components/grammatik/gerund.component';
import Deponentien from './components/grammatik/deponentien.component';
// Aufgaben
import AufgabenIndex from './components/aufgabenIndex.component';
import Klasse7a from './components/klasse7a.component';
import Klasse12 from './components/klasse12.component';
//<Link className='' to={'/index'}>Home</Link>
//<Link className='' to={'/grammatik'}>Grammatik</Link>
//<Link className='' to={'/wikinger'}>Wikinger</Link>
//<Link className='' to={'/verres'}>Verres</Link>
//<Link className='' to={'/App/aufgaben'}>Aufgaben</Link>

const App = () => {
    return (
    <Router>
    <Header />
            <nav className="flexnav">
              <Link className='navbutn' to={'/'}>Home</Link>
              <Link className='navbutn' to={'/grammatik'}>Grammatik</Link>
              <Link className='navbutn' to={'/aufgaben'}>Aufgaben</Link>
            </nav>
      <Switch>
          <Route exact path='/' component={ Index } />
          <Route exact path='/grammatik' component={ Grammatik } />
          <Route path='/grammatik/komparativ' component={ Komparativ } />
          <Route path='/grammatik/praepositionen' component={ Praepositionen } />
          <Route path='/grammatik/vokativ' component={ Vokativ } />
          <Route path='/grammatik/imperativ' component={ Imperativ } />
          <Route path='/grammatik/aktiv' component={ Aktiv } />
          <Route path='/grammatik/passiv' component={ Passiv } />
          <Route path='/grammatik/kleineverben' component={ KleineVerben } />
          <Route path='/grammatik/stammformen' component={ Stammformen } />
          <Route path='/grammatik/konjunktiv' component={ Konjunktiv } />
          <Route path='/grammatik/partizip' component={ Partizip } />
          <Route path='/grammatik/gerund' component={ Gerund } />
          <Route path='/grammatik/deponentien' component={ Deponentien } />
          <Route exact path='/aufgaben' component={ AufgabenIndex } />
          <Route path='/klasse7a' component={ Klasse7a } />
          <Route path='/klasse12' component={ Klasse12 } />
      </Switch>
    <Footer />
    </Router>
    );
  }

export default App;