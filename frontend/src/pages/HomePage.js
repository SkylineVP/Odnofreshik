import React, { Component } from 'react';
import { withRouter }       from 'react-router';
import { AppContext }       from '../App.js';

class HomePage extends Component {

	render() {
		return null;

	}
}

HomePage.contextType = AppContext;

export default withRouter(HomePage);