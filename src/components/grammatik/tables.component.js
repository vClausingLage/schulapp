import React from 'react';

export const TableVerben = (props) => {
    let heading = props.heading;
    let input = props.props;
    return(
        <div className="grid-item">
        <h3>{heading}</h3>
        <table className="tableV">
            <tbody>
            <tr><th></th><th>Singular</th><th>Plural</th></tr>
            <tr><td>1</td><td>{input[0]}</td><td>{input[3]}</td></tr>
            <tr><td>2</td><td>{input[1]}</td><td>{input[4]}</td></tr>
            <tr><td>3</td><td>{input[2]}</td><td>{input[5]}</td></tr>
            </tbody>
        </table>
        </div>
    )
}

export const TableSubstantive = (input) => {
    input = input.input;
    return(
        <div className="grid-item">
        <table>
            <tbody>
            <tr><th></th><th>Singular</th><th>Plural</th></tr>
            <tr><td>Nom</td><td>{input[0]}</td><td>{input[5]}</td></tr>
            <tr><td>Gen</td><td>{input[1]}</td><td>{input[6]}</td></tr>
            <tr><td>Dat</td><td>{input[2]}</td><td>{input[7]}</td></tr>
            <tr><td>Akk</td><td>{input[3]}</td><td>{input[8]}</td></tr>
            <tr><td>Abl</td><td>{input[4]}</td><td>{input[9]}</td></tr>
            </tbody>
        </table>
        </div>
    )
}