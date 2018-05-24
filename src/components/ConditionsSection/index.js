import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './styles.css';
import card from './img/card.svg';
import parcel from './img/parcel.svg';
import garanty from './img/garanty.svg';
import cartridge from './img/cartridge.svg';

export default class ConditionsSection extends Component {
  render() {
    return (<div id="conditions-section" className="conditions-section py-5 my-5">
      <Container>
        <Row>
          <Col md={6} lg={{size: 5, offset: 1}} className="d-md-inline-flex mb-5 text-center text-md-left">
            <div className="conditions__icon mb-4 mr-md-4 mb-md-0">
              <img src={parcel} alt="Оплата фильтра обратного осмоса" />
            </div>
            <div className="conditions__description">
              <h3>Доставка</h3>
              <p>Доставка до отделения почты уже включена в стоимость. При оплате до 12:00 по Москве отправим в тот же день. При заказе с установкой - мастер доставит фильтр на дом.</p>
            </div>
          </Col>
          <Col md={6} lg={{size: 5}} className="d-md-inline-flex mb-5 text-center text-md-left">
            <div className="conditions__icon mb-4 mr-md-4 mb-md-0">
              <img src={cartridge} alt="Оплата фильтра обратного осмоса" />
            </div>
            <div className="conditions__description">
              <h3>Обслуживание</h3>
              <p>Оставшийся ресурс отображается на дисплее. В среднем, замена картриджей нужна 1 раз в год. Вы можете купить их у нас или в других магазинах.</p>
            </div>
          </Col>
          <Col md={6} lg={{size: 5, offset: 1}} className="d-md-inline-flex mb-5 text-center text-md-left">
            <div className="conditions__icon mb-4 mr-md-4 mb-md-0">
              <img src={garanty} alt="Оплата фильтра обратного осмоса" />
            </div>
            <div className="conditions__description">
              <h3>Гарантия</h3>
              <p>При подключении нашим специалистом даем пожизненную гарантию. При самостоятельном подключении гарантия – 12 месяцев.</p>
            </div>
          </Col>
          <Col md={6} lg={{size: 5 }} className="d-md-inline-flex mb-5 text-center text-md-left">
            <div className="conditions__icon mb-4 mr-md-4 mb-md-0">
              <img src={card} alt="Оплата фильтра обратного осмоса"/>
            </div>
            <div className="conditions__description">
              <h3>Оплата</h3>
              <p>Оплата производится переводом на счет. Оформите заказ и реквизиты придут вам на email. Гарантия возврата средств – 14 банковских дней.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>);
  }
}
