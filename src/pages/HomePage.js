import React, { Component } from 'react';
import BackgroundTransition from '../services/BackgroundTransition';
import Navigation from '../components/Navigation';
import IntroSection from '../components/IntroSection';
import CalculatorSection from '../components/CalculatorSection';
import ConditionsSection from '../components/ConditionsSection';
//import ProductStory from '../components/ProductStory';
import TesterSection from '../components/TesterSection';
import PurchaseSection from '../components/PurchaseSection';

class HomePage extends Component {
  render() {
    return (<div className="home-page">
    	<BackgroundTransition />
    	<Navigation />
    	<IntroSection />
    	<CalculatorSection />
    	<ConditionsSection />
        <TesterSection />
    	{/*<ProductStory />*/}
    	<PurchaseSection />
    </div>);
  }
}

export default HomePage;
