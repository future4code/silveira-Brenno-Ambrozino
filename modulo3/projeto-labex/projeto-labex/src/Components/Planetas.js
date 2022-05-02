import React from 'react';

const Planetas = (props) => {
  return (
    <select value={props.value} onChange={props.onChange} name="planetas" id="planetas">
        <option disabled selected> Escolha um Planeta</option>
        <option value="Mercúrio">Mercúrio</option>
        <option value="Vênus">Vênus</option>
        <option value="Terra">Terra</option>
        <option value="Marte">Marte</option>
        <option value="Júpiter">Júpiter</option>
        <option value="Saturno">Saturno</option>
        <option value="Urano">Urano</option>
        <option value="Netuno">Netuno</option>
    </select>
    )
}
    
export default Planetas