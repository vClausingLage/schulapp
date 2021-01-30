import React, { useState } from 'react';
import Grammatik from '../grammatik.component';

const KleineVerben = () => {

	const Esse = () => {
		return (
		<div className="grammar-grid container">
		<div className="grid-item">
			<h3>Präsens</h3>
		<table className="tableV">
			<tbody><tr>
				<th></th><th>Singular</th><th>Plural</th>
			</tr>
			<tr >
				<td>1</td><td>sum</td><td>sumus</td>
			</tr>
			<tr >
				<td>2</td><td>es</td><td>estis</td>
			</tr>
			<tr >
				<td>3</td><td>est</td><td>sunt</td>
			</tr></tbody>
    	</table>
		</div>
		<div className="grid-item">
		<h3>Imperfekt</h3>
    <table className="tableV">
		<tbody>
        <tr>
            <th></th><th>Singular</th><th>Plural</th>
        </tr>
        <tr >
            <td>1</td><td>eram</td><td>eramus</td>
        </tr>
        <tr >
            <td>2</td><td>eras</td><td>eratis</td>
        </tr>
        <tr >
            <td>3</td><td>erat</td><td>erant</td>
        </tr>
		</tbody>
    </table>
	</div>
	<div className="grid-item">
	<h3>Perfekt</h3>
    <table className="tableV">
        <tbody>
		<tr>
            <th></th><th>Singular</th><th>Plural</th>
        </tr>
        <tr >
            <td>1</td><td>fui</td><td>fuimus</td>
        </tr>
        <tr >
            <td>2</td><td>fuisti</td><td>fuistis</td>
        </tr>
        <tr >
            <td>3</td><td>fuit</td><td>fuerunt</td>
        </tr>
		</tbody>
    </table>
	</div>
	<div className="grid-item">
	<h3>Futur</h3>
    <table className="tableV">
        <tbody>
		<tr>
            <th></th><th>Singular</th><th>Plural</th>
        </tr>
        <tr >
            <td>1</td><td>ero</td><td>erimus</td>
        </tr>
        <tr >
            <td>2</td><td>eris</td><td>eritis</td>
        </tr>
        <tr >
            <td>3</td><td>erit</td><td>erunt</td>
        </tr>
		</tbody>
    </table>
	</div>
			</div>
		)
	}

	const Posse = () => {
		return(
			<div className="grammar-grid container">
				<div className="grid-item">
					<h3>Präsens</h3>
    <table className="tableV">
        <tbody>
		<tr>
            <th></th><th>Singular</th><th>Plural</th>
        </tr>
        <tr >
            <td>1</td><td>possum</td><td>possumus</td>
        </tr>
        <tr >
            <td>2</td><td>potes</td><td>potestis</td>
        </tr>
        <tr >
            <td>3</td><td>potest</td><td>possunt</td>
        </tr>
		</tbody>
    </table>
	</div>
	<div className="grid-item">
		<h3>Imperfekt</h3>
    <table className="tableV">
       <tbody>
	   <tr>
            <th></th><th>Singular</th><th>Plural</th>
        </tr>
        <tr >
            <td>1</td><td>poteram</td><td>poteramus</td>
        </tr>
        <tr >
            <td>2</td><td>poteras</td><td>poteratis</td>
        </tr>
        <tr >
            <td>3</td><td>poterat</td><td>poterant</td>
        </tr>
	   </tbody>
    </table>
	</div>
	<div className="grid-item">
		<h3>Perfekt</h3>
    <table className="tableV">
       <tbody>
	   <tr>
            <th></th><th>Singular</th><th>Plural</th>
        </tr>
        <tr >
            <td>1</td><td>potui</td><td>potuimus</td>
        </tr>
        <tr >
            <td>2</td><td>potuisti</td><td>potuitstis</td>
        </tr>
        <tr >
            <td>3</td><td>potuit</td><td>potuerunt</td>
        </tr>
	   </tbody>
    </table>
	</div>
	</div>
		)
	}

	const Velle = () =>{
		return (
			<div className="grammar-grid container">
				<div className="grid-item">
				<h3>Präsens</h3>
				<table className="tableV">
				<tbody>
				<tr><th></th><th>Singular</th><th>Plural</th>
				</tr>
				<tr ><td>1</td><td>volo</td><td>volumus</td>
				</tr>
				<tr ><td>2</td><td>vis</td><td>vultis</td>
				</tr>
				<tr ><td>3</td><td>vult</td><td>volunt</td>
				</tr>
				</tbody>
				</table>
				</div>
				<div className="grid-item">
				<h3>Perfekt</h3>
				<table className="tableV">
				<tbody>
				<th></th><th>Singular</th><th>Plural</th>
				<tr >
					<td>1</td><td>volui</td><td>voluimus</td>
				</tr>
				<tr >
					<td>2</td><td>voluisti</td><td>voluistis</td>
				</tr>
				<tr >
					<td>3</td><td>voluit</td><td>voluerunt</td>
				</tr>
				</tbody>
				</table>
				</div>
			</div>
		)
	}

	const Ire = () => {
		return (
			<div className="grammar-grid container">
				<div className="grid-item">
					<h3>Präsens</h3>
			<table className="tableV">
			<tbody>
			<tr>
				<th></th><th>Singular</th><th>Plural</th>
			</tr>
			<tr >
				<td>1</td><td>eo</td><td>imus</td>
			</tr>
			<tr >
				<td>2</td><td>is</td><td>itis</td>
			</tr>
			<tr >
				<td>3</td><td>it</td><td>eunt</td>
			</tr>
			</tbody>
			</table>
			</div>
			<div className="grid-item">
			<h3>Perfekt</h3>
			<table className="tableV">
			<tbody>
			<tr>
				<th></th><th>Singular</th><th>Plural</th>
			</tr>
			<tr >
				<td>1</td><td>ii</td><td>imus</td>
			</tr>
			<tr >
				<td>2</td><td>isti</td><td>istis</td>
			</tr>
			<tr >
				<td>3</td><td>it</td><td>ierunt</td>
			</tr>
			</tbody>
			</table>
			</div>
			</div>
		)
	}

	const components = [<Esse />, <Posse />, <Velle />, <Ire />];
	const [show, setShow] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    
    const items = ['esse', 'posse','velle','ire'];

    function clickButton(index){
        setShow(index);
        setActiveIndex(index);
    }

	const renderedButtons = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';
        return <div key={items.indexOf(item)} className={`butn ${active}`} onClick={() => clickButton(items.indexOf(item))}>{item}</div>
    });

	return(
		<div>
			<Grammatik />
			<h1>die kleinen Verben</h1>	
			<div className="flex" style={{justifyContent: 'center'}}>
                {renderedButtons}
            </div>
            <div className="component">{components[show]}</div>
		</div>
	)
}

export default KleineVerben;