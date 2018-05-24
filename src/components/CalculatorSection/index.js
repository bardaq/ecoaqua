import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import './styles.css';

class CalculatorSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      familySize: 2,
      waterPerDay: 1,
      waterCost: 50
    }
  }
  // counter( el, val ) {
  //   function hideChars() {
  //     $(el.children('.counter-chars-splitted')[countLetterAnim]).animate({
  //       top: '20px', opacity: '0' }, 40, () => {
  //       if (el.text().length !== countLetterAnim + 1) {
  //         countLetterAnim++;
  //         hideChars()
  //       } else {
  //         countLetterAnim = 0;
  //         el.html(output);
  //         showChars()
  //       }
  //     })
  //   };
  //   function showChars() {
  //     $(el.children('.counter-chars-splitted')[countLetterAnim]).animate({ top: '0', opacity: '1' }, 40, () => {
  //       if (el.text().length != countLetterAnim) {
  //         countLetterAnim++;
  //         showChars()
  //       }
  //     })
  //   }
  //   let output = '', countLetterAnim = 0;
  //   for (var i = 0; i < val.length; i++) {
  //     val.charAt(i) != ' '
  //     ? output += '<span class="counter-chars-splitted" style="position: relative; opacity: 0; top: -20px">' + val.charAt(i) + '</span>' : output += ' ';
  //   }
  //   hideChars();
  // }
  // counter($('#calculator__result-counter'), res.toString());
  render() {
    return (<section id="calculator-section" className="calculator-section py-5 my-5">
      <Container>
        <Row className="my-4">
          <Col>
            <h2>Калькулятор экономии:</h2>
            <Form className="calculator">
              <FormGroup className="my-5 text-center" row>
                <Col sm={4}>
                  <Label for="family-size">Сколько человек  в&nbsp;семье?</Label>
                  <Input type="number" name="family-size" id="family-size" className="calculator__input" value={this.state.familySize}  bsSize="lg"
                  onChange={ (e) => { this.setState({ familySize: e.target.value })}}/>
                </Col>
                <Col sm={4}>
                  <Label for="water-per-day">Литров в день на&nbsp;каждого</Label>
                  <Input type="number" name="water-per-day" id="water-per-day" className="calculator__input" value={this.state.waterPerDay} bsSize="lg"
                  onChange={ (e) => { this.setState({ waterPerDay: e.target.value })}}/>
                </Col>
                <Col sm={4}>
                  <Label for="water-cost">Цена 1 литра в&nbsp;магазине</Label>
                  <Input type="number" name="water-cost" id="water-cost" className="calculator__input calculator__input_price" value={this.state.waterCost} bsSize="lg"
                  onChange={ (e) => { this.setState({ waterCost: e.target.value })}}/>
                </Col>
              </FormGroup>
              <h4>Вы тратите на воду:</h4>
              <h4><span id="calculator__result">{this.state.familySize * this.state.waterPerDay * this.state.waterCost * 365}</span> ₽/год.</h4>
            </Form>
            <p className="mt-4"><b>А фильтр стоит 5000 ₽</b> + расходники меняются раз в год за 2500руб. При этом вы будете пить самую полезную воду из доступных в городских условиях!</p>
          </Col>
        </Row>
      </Container>
    </section>);
  }
}

export default CalculatorSection;
