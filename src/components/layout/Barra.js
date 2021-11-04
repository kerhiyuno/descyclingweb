import React, { useState } from 'react';
import './Barra.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import logo from '../../img/logo.jpg';

const Barra = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);
    const onExited = () => setIsOpen(false);

  return (
    <div>
    <Navbar  className="fixed-top" style={{backgroundColor: '#167067'}} expand="lg">
        <NavbarBrand href="/" style={{marginLeft: "4%", paddingRight: "20px"}}>
                  <img src={logo} alt="" width="150"/>
              </NavbarBrand>
        <NavbarToggler className="NavToogler-empaty" onClick={toggle} />
        <Collapse className="logCollapse" isOpen={isOpen} onExited={onExited} navbar>
            <Nav navbar  className="justify-content-center" style={{ marginLeft: "0%" }}>
                <NavItem>
                    <NavLink className="NavLink-empaty" href="/">Inicio</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="NavLink-empaty" href="/Productos">Productos</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="NavLink-empaty" href="/QuienesSomos">Quienes somos
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="NavLink-empaty" href="/Historia">Historia</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="NavLink-empaty" href="/Blog">Blog de Reciclaje</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="NavLink-empaty" href="/Contacto">Contacto</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
</div>
  );
}

export default Barra;