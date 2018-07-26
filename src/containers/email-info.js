import React, { Component } from 'react';

import { connect } from 'react-redux';

class EmailInfo extends Component {
    render() {
        if (!this.props.activeMail) {
            return(
                <section>
                    <p>Clique em uma das opções para exibir detalhes</p>
                </section>
            )
        };

        return (
            <section className="info">
                <figure>
                    <img src={this.props.activeMail.img} alt={this.props.activeMail.description} />
                    <figcaption>{this.props.activeMail.name}</figcaption>
                </figure>

                <p>{this.props.activeMail.description}</p>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeMail: state.reducerActiveMail
    };
}

export default connect(mapStateToProps)(EmailInfo)