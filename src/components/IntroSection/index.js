import React, { Component } from 'react';
import { Container, Row, Col, Button} from 'reactstrap';
import product from './product.png';
import './styles.css';

class IntroSection extends Component {
  render() {
    return (<section className="intro-section">
    	<Container>
				<Row className="">
					<Col md="6">
						<h1 className="display-4">Фильтр  обратного осмоса</h1>

						<div className="boollets my-4">
							<div className="boollets__item">Минерализатор</div>
							<div className="boollets__item">Биоактиватор</div>
							<div className="boollets__item">Постфильтр</div>
							<div className="boollets__item">Бак 9 л.</div>
							<div className="boollets__item">Розетка не нужна</div>
						</div>

						<p className="mt-4">Фильтр обратного осмоса для дома  за <b>5000₽</b> c гарантией, доставкой и установкой. Пожалуй лучший фильтр на рынке.</p>

						<Button color="primary" size="lg" className="mt-3">Калькулятор экономии</Button>
					</Col>
					<Col md="6" className="align-self-center">
						<img src={product} className="mt-5 img-fluid" alt="фильтр обратного осмоса" />
					</Col>
				</Row>
    	</Container>
    </section>);
  }
}

export default IntroSection;
