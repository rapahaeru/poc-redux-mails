import React, { Component } from 'react';

import EmailList from '../containers/email-list';
import EmailInfo from '../containers/email-info';

import Search from './search';
import SelectSection from '../containers/select-section';

export default class App extends Component {
  render() {
    return (
		<div>
			<Search />
			<SelectSection />

			<div className="container">
				<EmailList />
				<EmailInfo />
			</div>
		</div>
    );
  }
}
