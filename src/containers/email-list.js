import React, { Component } from 'react';

import { connect } from 'react-redux';
import { previewEmail, selectMail } from '../actions/index';
import { bindActionCreators } from 'redux';

import EmailListItem from '../components/email-list-item';

class EmailList extends Component {

    renderList() {
        return this.props.mails.map((mail) => {
            // console.log(this.props.previewEmail(mail));
            // console.log(this.props);
            let inputClass = ((mail.id > 2) ? "name readed" : "name" );
            return (
                <EmailListItem 
                    key={mail.id} 
                    actionChange={ (event) => this.props.selectMail(mail, event) } 
                    actionClick={ () => this.props.previewEmail(mail) } 
                    name={mail.name} 
                    inputClassName={inputClass} 
                    dateDelivery={mail.dateDelivery} 
                    dateDeliveryFormated={mail.dateDeliveryFormated} />
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

function mapStateToProps(state) {
    return {
        mails: state.reducerMails,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        previewEmail: previewEmail,
        selectMail: selectMail
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailList);