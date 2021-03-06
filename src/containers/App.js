import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from 'store'
import IndexContainer from 'containers/IndexContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const store = configureStore();
export default class App extends Component {
	render() {
		return (
			<Provider key={ module.hot ? Date.now() : store} store={store}>
				<div class="container clearfix">
					<MuiThemeProvider>
						<IndexContainer/>
					</MuiThemeProvider>
				</div>
			</Provider>
		)
	}
}