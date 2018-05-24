import React, { Component } from 'react';
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from './logo.png';
import './styles.css';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="navigation">
        <Navbar dark fixed="top" expand="lg">
          <NavbarBrand href="/"><img className="navbar-band-img" src={logo} alt="EcoAqua"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about-us/">О нас</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#calculator-section">Калькулятор экономии</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#conditions-section">Условия</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#product-story/">Принцип работы</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#purchase-section"><Button color="primary" className="">Заказать фильтр</Button></NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}