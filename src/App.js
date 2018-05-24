import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import AboutUsPage from './pages/AboutUsPage.js';
import TermsPage from './pages/TermsPage.js';
import ThankYouPage from './pages/ThankYouPage.js';

class App extends Component {
  render() {
    return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={HomePage}/>
					<Route path='/about-us' component={AboutUsPage}/>
					<Route path='/terms-and-conditions' component={TermsPage}/>
					<Route path='/thank-you-page' component={ThankYouPage}/>
				</Switch>
			</BrowserRouter>
    );
  }
}

export default App;
