import React, { Component } from 'react';

import { connect } from 'react-redux';
import { previewEmail, selectMail, fetchMails } from '../actions/index';
import { bindActionCreators } from 'redux';

import EmailListItem from './email-list-item'

class EmailList extends Component {

    constructor() {
        super();
        this.state = {
            mails: []
        }
    }

    componentDidMount() {
        let mails = this.props.fetchMails();
        mails.then( (mail) => {
            this.setState({ mails: mail.payload.data });
        })
    }

    renderList() {
        return this.state.mails.map((mail) => {
            // console.log(mail)
            let inputClass = ((mail.id > 2) ? "name readed" : "name" );
            return (
                <EmailListItem 
                    key={mail.id} 
                    actionChange={ (event) => this.props.selectMail(mail, event) } 
                    actionClick={ () => this.props.previewEmail(mail) } 
                    name={mail.name} 
                    inputClassName={inputClass} 
                    dateDelivery={mail.date_delivery}
                    dateDeliveryFormated={mail.date_delivery_formated} />
            );
        })
    }

    render() {
        return(
            <ul className="names">
                {this.renderList()}
            </ul>
        );
    }
}

function mapDispatchToProps(dispatch) {
    //importa as funções que estão em '/actions'.
    return bindActionCreators({
        previewEmail: previewEmail,
        selectMail: selectMail,
        fetchMails: fetchMails
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(EmailList);