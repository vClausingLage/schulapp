import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Index from './components/index.component';
import Header from './components/header.component';
import Footer from './components/footer.component';
import Grammatik from './components/grammatik.component';
import Lexikon from './components/lexikon.component';
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
import CalcArea from './components/clc.component';
//<Link className='' to={'/index'}>Home</Link>
//<Link className='' to={'/grammatik'}>Grammatik</Link>
//<Link className='' to={'/wikinger'}>Wikinger</Link>
//<Link className='' to={'/verres'}>Verres</Link>
//<Link className='' to={'/App/aufgaben'}>Aufgaben</Link>

const App = () => {
  return (
    <Router>
      <Header />
      <nav className='flexnav'>
        <Link className='navbutn' to={'/App/'}>
          Home
        </Link>
        {/*<Link className='navbutn' to={'/App/lexikon'}>
          Lexikon
  </Link>*/}
        <Link className='navbutn' to={'/App/grammatik'}>
          Grammatik
        </Link>
        <Link className='navbutn' to={'/App/aufgaben'}>
          Aufgaben
        </Link>
        <Link className='navbutn' to={'/App/clc'}>
          Didos Problem
        </Link>
      </nav>
      <Switch>
        <Route exact path='/App/' component={Index} />
        <Route path='/App/lexikon' component={Lexikon} />
        <Route exact path='/App/grammatik' component={Grammatik} />
        <Route path='/App/grammatik/komparativ' component={Komparativ} />
        <Route
          path='/App/grammatik/praepositionen'
          component={Praepositionen}
        />
        <Route path='/App/grammatik/vokativ' component={Vokativ} />
        <Route path='/App/grammatik/imperativ' component={Imperativ} />
        <Route path='/App/grammatik/aktiv' component={Aktiv} />
        <Route path='/App/grammatik/passiv' component={Passiv} />
        <Route path='/App/grammatik/kleineverben' component={KleineVerben} />
        <Route path='/App/grammatik/stammformen' component={Stammformen} />
        <Route path='/App/grammatik/konjunktiv' component={Konjunktiv} />
        <Route path='/App/grammatik/partizip' component={Partizip} />
        <Route path='/App/grammatik/gerund' component={Gerund} />
        <Route path='/App/grammatik/deponentien' component={Deponentien} />
        <Route exact path='/App/aufgaben' component={AufgabenIndex} />
        <Route path='/App/klasse7a' component={Klasse7a} />
        <Route path='/App/klasse12' component={Klasse12} />
        <Route exact path='/App/clc' component={CalcArea} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
