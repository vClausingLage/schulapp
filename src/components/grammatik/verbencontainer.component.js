import React from 'react';
import { Link } from 'react-router-dom';
import { TableVerben } from './tables.component';

const AktPraes = () => {
    const PraesA = ['amo','amas','amat','amamus','amatis','amant'];
    const PraesE = ['taceo','taces','tacet','tacemus','tacetis','tacent'];
    const PraesI = ['audio','audis','audit','audimus','auditis','audiunt'];
    const PraesK = ['dico','dicis','dicit','dicimus','dicitis','dicunt'];

    return(
        <div>
            <div className="grammar-grid">
            <TableVerben heading="a-Konj." props={PraesA} />
            <TableVerben heading="e-Konj." props={PraesE} />
            <TableVerben heading="i-Konj." props={PraesI} />
            <TableVerben heading="kons.-Konj." props={PraesK} />
            </div>
        </div>
    )
}

const AktFut = () => {
    const FutA = ['amabo','amabis','amabit','amabimus','amabitis','amabunt'];
    const FutE = ['tacebo','tacebis','tacebit','tacebimus','tacebitis','tacebunt'];
    const FutI = ['audiam','audies','audiet','audiemus','audietis','audient'];
    const FutK = ['dicam','dices','dicet','dicemus','dicetis','dicent'];
    return(
        <div>
            <p className="grammatik">
            Tempuszeichen: <br></br> a- und e-Konjugation: <b>BO BI BU</b> <br></br> i- und kons. Konjugation: <b>AM und E</b>
            </p>
            <div className="grammar-grid">
	        <TableVerben heading="a-Konj." props={FutA} />
            <TableVerben heading="e-Konj." props={FutE} />
            <TableVerben heading="i-Konj." props={FutI} />
            <TableVerben heading="kons.-Konj." props={FutK} />
            </div>
        </div>
    )
}

const AktImp = () => {
    const ImpA = ['amabam','amabas','amabat','amabamus','amabatis','amabant'];
    const ImpE = ['tacebam','tacebas','tacebat','tacebamus','tacebatis','tacebant'];
    const ImpI = ['audiebam','audiebas','audiebat','audiebamus','audiebatis','audiebant'];
    const ImpK = ['dicebam','dicebas','dicebat','dicebamus','dicebatis','dicebant'];
    return(
        <div>
        <p className="grammatik">
            Tempuszeichen (e)ba
        </p>
        <div className="grammar-grid">
        <TableVerben heading="a-Konj." props={ImpA} />
        <TableVerben heading="e-Konj." props={ImpE} />
        <TableVerben heading="i-Konj." props={ImpI} />
        <TableVerben heading="kons.-Konj." props={ImpK} />
        </div>
        </div>
    )
}

const AktPerf = () => {
    const PerfA = ['amavi','amavisti','amavit','amavimus','amavistis','amaverunt'];
    const PerfE = ['tacui','tacuisti','tacuit','tacuimus','tacuistis','tacuerunt'];
    const PerfI = ['audivi','audivisti','audivit','audivimus','ausivistis','audiverunt'];
    const PerfK = ['dixi','dixisti','dixit','diximus','dixistis','dixerunt'];
    return(
        <div>
        <div className="grammatik">
	    <p>	v-Perfekt: a- und i-Konjugation <br></br> u-Perfekt: e-Konjugation <br></br> Beachte die <Link to={"/grammatik/stammformen"}>unregelmäßigen Verben</Link></p>
        </div>
        <div className="grammar-grid">
        <table className="grammatik">
            <tbody>
            <tr><th colSpan="3" style={{color: 'oldlace'}}>Personalendungen</th></tr>
			<tr><th></th><th>Singular</th><th>Plural</th></tr>
			<tr><td>1</td><td>-i</td><td>-imus</td></tr>
			<tr><td>2</td><td>-isti</td><td>-istis</td></tr>
			<tr><td>3</td><td>-it</td><td>-erunt</td></tr>
            </tbody>
		</table>
        <TableVerben heading="a-Konj." props={PerfA} />
        <TableVerben heading="e-Konj." props={PerfE} />
        <TableVerben heading="i-Konj." props={PerfI} />
        <TableVerben heading="kons.-Konj." props={PerfK} />
        </div>
        </div>
    )
}

const PassPraes = () => {
    const PraesA = ['amor','amaris','amatur','amamur','amamini','amantur'];
    const PraesE = ['taceor','taceris','tacetur','tacemur','tacemini','tacentur'];
    const PraesI = ['audior','audieris','auditur','audimur','audimini','audiuntur'];
    const PraesK = ['dicor','diceris','dicitur','dicimur','dicimini','dicuntur'];

    return(
        <div>
            <div className="grammar-grid">
            <table className="grammatik">
            <tbody>
            <tr><th colSpan="3" style={{color: 'oldlace'}}>Passivendungen</th></tr>
			<tr><th></th><th>Singular</th><th>Plural</th></tr>
			<tr><td>1</td><td>-or</td><td>-mur</td></tr>
			<tr><td>2</td><td>-(e)ris</td><td>-mini</td></tr>
			<tr><td>3</td><td>-tur</td><td>-ntur</td></tr>
            </tbody>
		</table>
            <TableVerben heading="a-Konj." props={PraesA} />
            <TableVerben heading="e-Konj." props={PraesE} />
            <TableVerben heading="i-Konj." props={PraesI} />
            <TableVerben heading="kons.-Konj." props={PraesK} />
            </div>
        </div>
    )
}

const PassFut = () => {
    const FutA = ['amabor','amaberis','amabitur','amabimur','amabimini','amabuntur'];
    const FutE = ['tacebor','taceberis','tacebitur','tacebimur','tacebimini','tacebuntur'];
    const FutI = ['audiar','audieris','audietur','audiemur','audiemini','audientur'];
    const FutK = ['dicar','diceris','dicetur','dicemur','dicemini','dicentur'];
    return(
        <div>
            <p className="grammatik">
            Tempuszeichen: <br></br> a- und e-Konjugation: <b>BO BI BU</b> <br></br> i- und kons. Konjugation: <b>AR und E</b>
            </p>
            <div className="grammar-grid">
	        <TableVerben heading="a-Konj." props={FutA} />
            <TableVerben heading="e-Konj." props={FutE} />
            <TableVerben heading="i-Konj." props={FutI} />
            <TableVerben heading="kons.-Konj." props={FutK} />
            </div>
        </div>
    )
}

const PassImp = () => {
    const ImpA = ['amabar','amabar','amabatur','amabamur','amabamini','amabantur'];
    const ImpE = ['tacebar','tacebar','tacebatur','tacebamur','tacebamini','tacebantur'];
    const ImpI = ['audiebar','audiebar','audiebatur','audiebamur','audiebamini','audiebantur'];
    const ImpK = ['dicebar','dicebar','dicebatur','dicebamur','dicebamini','dicebantur'];
    return(
        <div>
        <p className="grammatik">
            Tempuszeichen (e)ba
        </p>
        <div className="grammar-grid">
        <TableVerben heading="a-Konj." props={ImpA} />
        <TableVerben heading="e-Konj." props={ImpE} />
        <TableVerben heading="i-Konj." props={ImpI} />
        <TableVerben heading="kons.-Konj." props={ImpK} />
        </div>
        </div>
    )
}

const PassPerf = () => {
    const PerfA = ['amatus/a/um','amatus/a/um','amatus/a/um','amati/ae/a','amati/ae/a','amati/ae/a'];
    const PerfE = ['tacitus/a/um','tacitus/a/um','tacitus/a/um','taciti/ae/a','taciti/ae/a','taciti/ae/a'];
    const PerfI = ['auditus/a/um','auditus/a/um','auditus/a/um','auditi/ae/a','auditi/ae/a','auditi/ae/a'];
    const PerfK = ['dictus/a/um','dictus/a/um','dictus/a/um','dicti/ae/a','dicti/ae/a','dicti/ae/a'];
    return(
        <div>
        <div className="grammatik">
	    <p>PPP + esse</p>
        </div>
        <div className="grammar-grid">
        <TableVerben heading="a-Konj." props={PerfA} />
        <TableVerben heading="e-Konj." props={PerfE} />
        <TableVerben heading="i-Konj." props={PerfI} />
        <TableVerben heading="kons.-Konj." props={PerfK} />
        </div>
        </div>
    )
}

export { AktPraes, AktFut, AktImp, AktPerf, PassPraes, PassFut, PassImp, PassPerf };