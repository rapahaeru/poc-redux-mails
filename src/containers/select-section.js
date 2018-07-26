import React, { Component } from 'react';

import { connect } from 'react-redux';

class SelectSection extends Component {

	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		}

		this.updateCounter(this.props.checkedMails);
	}

	updateCounter(mailChecked) {
		console.log(mailChecked);
		if(mailChecked) {
			let counter = this.state.counter;

			if(mailChecked.isChecked === true) {
				console.log('entrou');
				counter++;
			} else {
				counter--;
			}
			this.setState({
				counter: counter
			})
		}
	}


    render() {
		console.log(this.props.checkedMails);
        return(
			<div className="manager">
				<label>
					Escolha a opção:
					<select className="select">
						<option value="none">Nenhum selecionado</option>
						<option value="all">Selecionar tudo</option>
						<option value="last-seven">últimos 7 dias</option>
						<option value="last-twenty">últimos 20 dias</option>
						<option value="all-readed">e-mails lidos</option>
					</select>
				</label>
				<span className="choices-not-readeds">loading</span>
				<span className="number-selecteds">({this.state.counter}) selecionados</span>
			</div>
        );
    }
}

function mapStateToProps(state) {
	return {
		checkedMails: state.reducerCheckedMail
	}
}

export default connect(mapStateToProps)(SelectSection);