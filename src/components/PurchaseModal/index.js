
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Container, Row, Col,
  Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './styles.css';
class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      cost: 7000
    };
  }
  phoneHandler(e){

  }
  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen} toggle={this.props.closeModal} className={this.props.className} backdrop="static">
          <Container>
            <Row>
              <Col>
                <ModalHeader toggle={this.props.closeModal}>Оформление заказа</ModalHeader>
                <ModalBody className="p-0 p-sm-5">
                  <Form id="purchase-form" action="/thankYouPage">
                    <FormGroup row className="py-3">
                      <Label for="checkbox" sm={{ size:7, offset: 1}}>
                        <h5>Установка</h5>
                        <p>При нашей установке выполучаете доставку на дом и пожизненную гарантию.  Отметьте галочку, чтобы заказать с установкой.</p>
                      </Label>
                      <Col sm={{ size: 2 }} className="mb-5 mb-sm-0 mt-sm-4 text-center">
                        <FormGroup check>

                          {/* CHECKBOX */}
                          <Input bsSize="lg" type="checkbox" id="checkbox" onClick={ () => {this.setState({check: !this.state.check})} }/>

                        </FormGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="py-sm-3">
                      <Col sm={{ size: 6 }} className="">
                        <Label for="city">Город доставки</Label>

                        {/* CITY */}
                        <Input bsSize="lg"  type="select" name="city" id="city">
                          <option value="Москва">Москва </option>
                          <option value="Московская область"> Московская область </option>
                          <option value="Санкт-Питербург"> Санкт-Петербург </option>
                          <option value="Екатеринбург">Екатеринбург </option>
                          <option value="Новосибирск">Новосибирск </option>
                          <option value="Нижний Новгород"> Нижний Новгород </option>
                          <option value="Казань">Казань </option>
                          <option value="Челябинск">Челябинск </option>
                          <option value="Омск">Омск </option>
                          <option value="Самара">Самара </option>
                          <option value="Ростов-на-Д>ону ">Ростов-на-Дону </option>
                          <option value="Уфа ">Уфа </option>
                          <option value="Красноярск ">Красноярск </option>
                          <option value="Пермь ">Пермь </option>
                          <option value="Воронеж ">Воронеж </option>
                          <option value="Волгоград ">Волгоград </option>
                          <option value="Краснодар ">Краснодар </option>
                          <option value="Саратов ">Саратов </option>
                          <option value="Тюмень ">Тюмень </option>
                          <option value="Тольятти ">Тольятти </option>
                          <option value="Ижевск ">Ижевск </option>
                          <option value="Барнаул ">Барнаул </option>
                          <option value="Ульяновск ">Ульяновск </option>
                          <option value="Иркутск ">Иркутск </option>
                          <option value="Хабаровск ">Хабаровск </option>
                          <option value="Ярославль ">Ярославль </option>
                          <option value="Владивосток ">Владивосток </option>
                          <option value="Махачкала ">Махачкала </option>
                          <option value="Томск ">Томск </option>
                          <option value="Оренбург ">Оренбург </option>
                          <option value="Кемерово ">Кемерово </option>
                          <option value="Новокузнецк ">Новокузнецк </option>
                          <option value="Рязань ">Рязань </option>
                          <option value="Астрахань ">Астрахань </option>
                          <option value="Пенза ">Пенза </option>
                          <option value="Липецк ">Липецк </option>
                          <option value="Киров ">Киров </option>
                          <option disabled>──────────────────────────────────────</option>
                          <option disabled>Только почтой, без установки</option>
                          <option disabled> Если вашего города нет в списке, выберете "другой" и напишите в "адрес" </option>
                          <option disabled>──────────────────────────────────────</option>
                          <option value="Екатеринбург ">Чебоксары </option>
                          <option value="Курск ">Курск </option>
                          <option value="Улан - У>дэ ">Улан - Удэ </option>
                          <option value="Тверь ">Тверь </option>
                          <option value="Магнитогорск ">Магнитогорск </option>
                          <option value="Сочи ">Сочи </option>
                          <option value="Брянск ">Брянск </option>
                          <option value="Владимир ">Владимир </option>
                          <option value="Нижний Тагил "> Нижний Тагил </option>
                          <option value="Чита">Чита </option>
                          <option value="Калуга">Калуга </option>
                          <option value="Смоленск">Смоленск </option>
                          <option value="Волжский">Волжский </option>
                          <option value="Курган">Архангельск </option>
                          <option value="Череповец">Череповец </option>
                          <option value="Орёл">Орёл </option>
                          <option value="Саранск">Саранск </option>
                          <option value="Вологда">Вологда </option>
                          <option value="Якутск">Якутск </option>
                          <option value="Владикавказ">Владикавказ </option>
                          <option value="Подольск">Подольск </option>
                          <option value="Мурманск">Архангельск </option>
                          <option value="Грозный">Грозный </option>
                          <option value="Тамбов">Тамбов </option>
                          <option value="Стерлитамак">Стерлитамак </option>
                          <option value="Петрозаводск">Петрозаводск </option>
                          <option value="Кострома">Кострома </option>
                          <option value="Нижневартовск">Нижневартовск </option>
                          <option value="Новороссийск">Новороссийск </option>
                          <option value="Йошкар-Ола"> Йошкар-Ола </option>
                          <option value="Таганрог">Таганрог </option>
                          <option value="Комсомольск">Комсомольск </option>
                          <option value="Сыктывкар">Сыктывкар </option>
                          <option value="Нальчик">Нальчик </option>
                          <option value="Нижнекамск">Нижнекамск </option>
                          <option value="Шахты">Шахты </option>
                          <option value="Дзержинск">Дзержинск </option>
                          <option value="Братск">Братск </option>
                          <option value="Орск">Орск </option>
                          <option value="Ангарск">Ангарск </option>
                          <option value="Энгельс">Энгельс </option>
                          <option value="Благовещенск">Благовещенск </option>
                          <option value="Старый Оскол"> Старый Оскол </option>
                          <option value="Великий Новгород"> Великий Новгород </option>
                          <option value="Другой">Другой </option>
                        </Input>
                      </Col>
                      <Col sm={{ size: 6 }} className="">
                        <Label for="adress">Улица, дом, индекс</Label>

                        {/* ARDESS */}
                        <Input bsSize="lg"  type="text" name="adress" id="adress"  required/>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="py-sm-3">
                      <Col sm={{ size: 6 }} className="">
                        <Label for="city">Email</Label>
                        {/* EMAIL */}
                        <Input bsSize="lg"  type="email" name="city" id="city" required/>
                      </Col>
                      <Col sm={{ size: 6 }} className="">
                        <Label for="phone">Контактный телефон</Label>

                        {/* PHONE */}
                        <Input bsSize="lg"  type="tel" name="phone" id="phone" required/>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="py-sm-3">
                      <Col sm={{ size: 6 }} className="">
                        <Label for="fio">Фио получателя</Label>

                        {/* FIO */}
                        <Input bsSize="lg"  type="text" name="fio" id="fio" required/>
                      </Col>
                      <Col sm={{ size: 6 }} className="summary-cost text-right mt-5 mt-sm-0">
                        <Label for="summary-cost">Всего к оплате </Label>

                        {/* SUMMARY */}
                        <Input bsSize="lg" type="text" readOnly name="summary-cost" id="summary-cost" value={(this.state.check ? 2000 : 0) + this.state.cost + '₽'}/>
                      </Col>
                    </FormGroup>
                    <Col md={{size:8, offset:2}}className="text-center p-0 mt-5">
                      <p>Мы отправим вам квитанцию с реквизитами для оплаты на email который вы указали в этой форме.</p>

                      {/*SUBMIT */}
                      <Button color="primary" size="lg">Получить реквизиты</Button>

                      <FormText color="muted" className="w-sm-50 mx-auto mt-4">
                        Нажимая эту кнопку вы подтверждаете, что ознакомлены и согласны с нашей <a href="#">политикой конфиденциальности</a>, правилами и условиями сайта.
                      </FormText>
                    </Col>
                  </Form>

                  <p></p>
                </ModalBody>
              </Col>
            </Row>
          </Container>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
