import React, { useState } from 'react';

const Lexikon = () => {
  const [value, setValue] = useState('');
  const [output, setOutput] = useState();

  async function startSuche() {
    const data = value;
    await fetch('/lexikon/lexikon.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: 'q= ' + data,
    }).then((res) => console.log(res));
  }

  return (
    <>
      <div className='w3-panel w3-sand'>
        <p>Latein Lexikon</p>
      </div>

      <p className='hinweis'>
        Das Lexikon befindet sich gerade noch im Aufbau.
      </p>

      <div className='w3-container'>
        <div className='w3-panel w3-light-blue'>
          <p>zur Benutzung: Die besten Ergebnisse erhälst Du, wenn Du</p>
          <ul>
            <li>
              für Verben den <i>Infinitiv</i> oder die <i>1. Pers. Sg.</i>{' '}
              eingibst
            </li>
            <li>
              für Substantive den <i>Nominativ Singular</i>
            </li>
            <li>
              für Adjektive den <i>Nominativ Singular Maskulinum</i>
            </li>
          </ul>
          <p>
            Soweit also fast wie im <i>analogen</i> Lexikon.
          </p>
        </div>

        <div>
          <p>
            <input
              type='text'
              name='q'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              id='Btn'
              onClick={(e) => startSuche()}
              type='button'
              className='btn btn-info'
            >
              suche
            </button>
          </p>
        </div>
      </div>

      <div>{output}</div>
    </>
  );
};

export default Lexikon;
