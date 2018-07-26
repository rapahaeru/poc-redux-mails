import React from 'react';

const EmailListItem = (props) => {
    return (
        <li key={props.id} className={props.inputClassName}>
            <input type="checkbox" onChange={props.actionChange} className={props.name} /> <span>{props.name} <small>recebido em: <time className="date" dateTime={props.dateDelivery}>{props.dateDeliveryFormated}</time></small></span>
            <a href="#" onClick={props.actionClick}>preview</a>
        </li>
    );
}

export default EmailListItem;