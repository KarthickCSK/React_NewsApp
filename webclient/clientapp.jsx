import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory,browserHistory,IndexRoute} from 'react-router';
import Login from './components/sample/login.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



ReactDOM.render(
	<MuiThemeProvider>
		</
	</MuiThemeProvider>,
	document.getElementById('mountapp1')
	);
