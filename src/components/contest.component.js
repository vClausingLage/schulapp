import React, { useState } from 'react';
import black01 from './pictures/9a/black01.png';
import black02 from './pictures/9a/black02.png';
import black03 from './pictures/9a/black03.png';
import black04 from './pictures/9a/black04.png';
import black05 from './pictures/9a/black05.png';
import black06 from './pictures/9a/black06.png';
import black07 from './pictures/9a/black07.png';
import black08 from './pictures/9a/black08.png';
import black09 from './pictures/9a/black09.png';
import baum01 from './pictures/9a/baum01.jpeg';
import baum02 from './pictures/9a/baum02.jpeg';
import baum03 from './pictures/9a/baum03.jpeg';
import baum04 from './pictures/9a/baum04.jpeg';
import baum05 from './pictures/9a/baum05.jpeg';
import baum06 from './pictures/9a/baum06.jpeg';
import baum07 from './pictures/9a/baum07.jpeg';
import baum08 from './pictures/9a/baum08.jpeg';
import baum09 from './pictures/9a/baum09.jpeg';

const Contest = ({ description, heading }) => {

    const [image01, setImage01] = useState(black01);
    const [image02, setImage02] = useState(black02);
    const [image03, setImage03] = useState(black03);
    const [image04, setImage04] = useState(black04);
    const [image05, setImage05] = useState(black05);
    const [image06, setImage06] = useState(black06);
    const [image07, setImage07] = useState(black07);
    const [image08, setImage08] = useState(black08);
    const [image09, setImage09] = useState(black09);

    function frageUno(){
        var inputVal = document.getElementById("frage1").value.trim().toLowerCase();
        if (inputVal === "barock") {
            setImage01(baum01);
            }
    }
    function frageZwei(){
        var inputVal = document.getElementById("frage2").value.trim().toLowerCase();
        if (inputVal === "carpediem" || 'carpediem!') {
            setImage02(baum02);
            }
        else {
            ;
            }
        }
    function frageDrei(){
        var inputVal = document.getElementById("frage3").value.trim().toLowerCase();
        if (inputVal === "eitelkeit") {
            setImage03(baum03);
            }
        else {
            ;
            }
        }
    function frageVier(){
            var inputVal = document.getElementById("frage4").value.trim().toLowerCase();
            if (inputVal === "1618") {
                setImage04(baum04);
                }
            else {
                ;
                }
            }
    function frageFuenf(){
        var inputVal = document.getElementById("frage5").value.trim().toLowerCase();
        if (inputVal === "frankreich" || 'österreich' || 'schweden' || 'spanien') {
            setImage05(baum05);
            }
        else {
            ;
            }
        }
    function frageSechs(){
        var inputVal = document.getElementById("frage6").value.trim().toLowerCase();
        if (inputVal === "gustav" || 'adolf') {
            setImage06(baum06);
            }
        else {
            ;
            }
        }
    function frageSieben(){
        var inputVal = document.getElementById("frage7").value.trim().toLowerCase();
        if (inputVal === "greif") {
            setImage07(baum07);
            }
        else {
            ;
            }
        }
    function frageAcht(){
        var inputVal = document.getElementById("frage8").value.trim().toLowerCase();
        if (inputVal === "schwedentrunk") {
            setImage08(baum08);
            }
        else {
            ;
            }
        }
    function frageNeun(){
        var inputVal = document.getElementById("frage9").value.trim().toLowerCase();
        if (inputVal === "katholisch" || 'katholiken' || 'protestanten' || 'protestantisch') {
            setImage09(baum09);
            }
        else {
            ;
            }
        }
    return (
        <div className='container'>
        <h2>{heading}</h2>
        <p>{description}</p>
        <p>Nenne die künstlerische Epoche, in der Andreas Gryphius lebt: <input type="text" id="frage1" />
            <button type="button" className="butn" onClick={frageUno}>prüfen</button></p>
        <p>'Nutze den Tag' auf Latein: <input type="text" id="frage2" />
            <button type="button" className="butn" onClick={frageZwei}>prüfen</button></p>
        <p>Gryphius verwendet dieses Wort für 'Nichtigkeit': <input type="text" id="frage3" />
            <button type="button" className="butn" onClick={frageDrei}>prüfen</button></p>
        <p>Beginn des 30-Jährigen Kriegs (Jahr): <input type="text" id="frage4" />
            <button type="button" className="butn" onClick={frageVier}>prüfen</button></p>
        <p>Nenne außer dem Heiligen Römischen Reich noch eine weitere Großmacht, die am 30-Jährigen Krieg beteiligt war: <input type="text" id="frage5" />
            <button type="button" className="butn" onClick={frageFuenf}>prüfen</button></p>
        <p>Recherchiere den Namen des schwedischen Königs im 30-Jährigen Krieg: <input type="text" id="frage6" />
            <button type="button" className="butn" onClick={frageSechs}>prüfen</button></p>
        <p>Nenne den 'deutschen' Nachnamen des Andreas Gryphius: <input type="text" id="frage7" />
            <button type="button" className="butn" onClick={frageSieben}>prüfen</button></p>
        <p>Recherchiere die verbreitetste Foltermethode während edes 30-Jährigen Krieges: <input type="text" id="frage8" />
            <button type="button" className="butn" onClick={frageAcht}>prüfen</button></p>
        <p>Nenne eine der beiden Konfessionen, die sich im 30-Jährigen Krieg gegenüberstanden: <input type="text" id="frage9" />
            <button type="button" className="butn" onClick={frageNeun}>prüfen</button></p>

        <h2>Bild</h2>
        <div className="container">
        <div className="w3-row">
        <div className="w3-third">
            <img alt='not found' src={image01} id="baum01" style={{width: '100%'}} />
        </div>
        <div className="w3-third">
            <img alt='not found' src={image02} id="baum02" style={{width: '100%'}} />
        </div>
        <div className="w3-third">
            <img alt='not found' src={image03} id="baum03" style={{width: '100%'}} />
        </div>
        </div>
        <div className="w3-row">
        <div className="w3-third">
            <img alt='not found' src={image04} id="baum05" style={{width: '100%'}} />
        </div>
        <div className="w3-third">
            <img alt='not found' src={image05} id="baum06" style={{width: '100%'}} />
        </div>
        <div className="w3-third">
            <img alt='not found' src={image06} id="baum07" style={{width: '100%'}} />
        </div>
        </div>
        <div className="w3-row">
        <div className="w3-third">
            <img alt='not found' src={image07} id="baum09" style={{width: '100%'}} />
        </div>
        <div className="w3-third">
            <img alt='not found' src={image08} id="baum10" style={{width: '100%'}} />
        </div>
        <div className="w3-third">
            <img alt='not found' src={image09} id="baum11" style={{width: '100%'}} />
        </div>
        </div>
        </div>
        </div>
    )
}

export default Contest;