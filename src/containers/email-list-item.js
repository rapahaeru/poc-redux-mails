import React, { Component } from 'react';

class EmailListItem extends Component {
    render() {
        return (
            <li key={this.props.id} className={this.props.inputClassName}>
                <input type="checkbox" onChange={this.props.actionChange} className={this.props.name} /> <span>{this.props.name} <small>recebido em: <time className="date" dateTime={this.props.dateDelivery}>{this.props.dateDeliveryFormated}</time></small></span>
                <a href="#" onClick={this.props.actionClick}>preview</a>
            </li>
        );
    }
}

export default EmailListItem;