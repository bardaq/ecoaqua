import React, { Component } from 'react';
import { Container, Row, Col, Table, Button} from 'reactstrap';
import product from './product.png';
import PurchaseModal from '../PurchaseModal';
import './styles.css';

export default class PurchaseSection extends Component {
  constructor(props){
    super(props)
    this.state = { openModal: false }
    this.toogleModal = this.toogleModal.bind(this);
  }

  toogleModal(){
    this.setState({ openModal: !this.state.openModal });
  }

  render() {
    return (<section id="purchase-section" className={(this.state.openModal ? "blured " : '') + "purchase-section py-5 my-5"}>
      <Container>
        <Row>
          <Col lg="6">
            <h2>EcoAqua F&nbsp;-&nbsp;90tk</h2>
            <h3><strike className="font-weight-light text-muted">8000</strike> <b>5999₽</b></h3>
            <p>Мы произвели самый оптимальный по цене, функционалу и качеству фильтр для домашнего использования.</p>
            <Table striped borderless className="mt-5">
              <tbody>
                <tr>
                  <td>Скорость набора бака  </td>
                  <td>15 мин.</td>
                </tr>
                <tr>
                  <td>Объем бака</td>
                  <td>9 л.</td>
                </tr>
                <tr>
                  <td>Нужно обслуживать</td>
                  <td>Раз в год.</td>
                </tr>
                <tr>
                  <td>Ресурс фильтра </td>
                  <td>210 000 л.</td>
                </tr>
                <tr>
                  <td>Минирализатор</td>
                  <td>Есть</td>
                </tr>
                <tr>
                  <td>Насыщение кислородом</td>
                  <td>Есть</td>
                </tr>
                <tr>
                  <td>Постфильтр с ионами серебра  </td>
                  <td>Есть</td>
                </tr>
                <tr>
                  <td>Габариты (мм)  </td>
                  <td>365 х 362 х 312</td>
                </tr>
                <tr>
                  <td>Установка</td>
                  <td>Под раковину</td>
                </tr>
                <tr>
                  <td>Розетка</td>
                  <td>Не требуется</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col lg="6" className="align-self-center text-center mt-5 lg-order-1">
            <img src={product} alt="Фильтр обратного осмоса EcoAqua F80" className="img-fluid" />
            <Button color="primary" size="lg" onClick={this.toogleModal}>Оформить заказ</Button><br/>
            <small>Осталось 9 шт.</small>
          </Col>
        </Row>
      </Container>
      <PurchaseModal isOpen={this.state.openModal} closeModal={this.toogleModal} />
    </section>);
  }
}
