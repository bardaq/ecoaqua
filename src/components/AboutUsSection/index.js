import React, { Component } from 'react';
import { Container, Row, Col, Button} from 'reactstrap';
import MapComponent from './MapComponent';
import './styles.css';

export default class AboutUsSection extends Component {
  render() {
    return (<section className="about-us-section">
    	<Container fluid className="p-0">
				<Row className="no-gutters">
					<Col md="6" className="align-self-center p-5">
						<h1 className="display-4">О нас</h1>
						<p className="mt-4">На рынке с 2016 года. Занимаемся поставкой фильтров в Польше, Украине, Россие. С 2018 Являемся партнерами и дистрибюторами мембран FilmTec USA.  С предложениями и вопросами о партнерстве обращайтесь в наш главный офиса в Варшаве: +48&nbsp;(22)&nbsp;810&nbsp;00&nbsp;12</p>
						<Button color="secondary" size="lg" className="mt-3">На главную</Button>
					</Col>
					<Col md="6" className="map-container" id="map">
						<MapComponent />
					</Col>
				</Row>
    	</Container>
    </section>);
  }
}
