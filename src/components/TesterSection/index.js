import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import icon from './icon-tester.svg';
import './styles.css';

export default class TesterSection extends Component {
  render() {
    return (<section id="tester-section" className="tester-section py-5 my-5">
    	<Container>
				<Row>
          <Col md={6} className="tester-section__description text-center text-md-left order-2 order-md-1">
            <h3>Как проверить, что фильтр очищает воду?</h3>
            <p className="mt-4">В комплекте идет 10 полосок для экспресс-теста воды. Вы сможете проверить домашнюю воду до и после фильтрации на следующие показатели:</p>
            <ListGroup>
              <ListGroupItem>Уровень жесткости pH</ListGroupItem>
              <ListGroupItem>Наличие хлора Cl</ListGroupItem>
              <ListGroupItem>Карбонатная жесткость GH</ListGroupItem>
              <ListGroupItem>Общая жесткость KH</ListGroupItem>
              <ListGroupItem>Нитриты и нитраты</ListGroupItem>
              <ListGroupItem>Тяжелые металлы</ListGroupItem>
            </ListGroup>
          </Col>

          <Col md={6} className="align-self-center text-center order-1 order-md-2">
            <img src={icon} alt="Как проверить что фильтр очищает воду?" className="img-fluid tester-section__icon" />
          </Col>
				</Row>
    	</Container>
    </section>);
  }
}
