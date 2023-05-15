import { useContext, useState } from 'react';
import './Barra.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

import logo from '../../img/logo.png';
import AuthContext from '../../context/auth/authContext';
import { useNavigate } from 'react-router-dom';

const Barra = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggle = () => setIsOpen(!isOpen);
    const onExited = () => setIsOpen(false);
    const { autenticado } = useContext(AuthContext);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
    <Navbar  className="fixed-top navbarsize" style={{backgroundColor: '#105157'}} expand="lg">
        <NavbarBrand href="/" style={{marginLeft: "4%", paddingRight: "0px"}}>
                  <img src={logo} alt="" width="200"/>
              </NavbarBrand>
        <NavbarToggler className="NavToogler-empaty" onClick={toggle} />
        <Collapse className="logCollapse mr-auto" isOpen={isOpen} onExited={onExited} navbar>
            <Nav navbar  className="justify-content-center" style={{ marginLeft: "0%" }}>
                <NavItem>
                    <NavLink className="NavLink-empaty" href="/">Inicio</NavLink>
                </NavItem>
                <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
                    <DropdownToggle nav caret  className="NavLink-empaty">
                    Quienes somos
                    </DropdownToggle>
                    <DropdownMenu >
                        <div onClick={() => {setDropdownOpen(false);navigate('/QuienesSomos')}} className='DropdownMenu'>Nosotros</div>
                        <DropdownItem divider />
                        <div onClick={() => {setDropdownOpen(false);navigate('/Prensa')}} className='DropdownMenu'>Prensa y videos</div>
                    </DropdownMenu>
                </Dropdown>
                <NavItem>
                    <NavLink className="NavLink-empaty" href="/Productos">Productos y gestión</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="NavLink-empaty" href="/Blog">Blog</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="NavLink-empaty" href="/Contacto">Contacto</NavLink>
                </NavItem>

                {
              /*<NavItem>
                    <NavLink className="NavLink-empaty" href="/MiCuenta">{ autenticado ? ('Mi cuenta') : ('Iniciar Sesión')}</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="NavLink-empaty" href="/Carrito">Carrito</NavLink>
                </NavItem> */
                }
            </Nav>
        {isOpen ? (
            <div className="barraverdecollapse">
            </div>): null}
        </Collapse>
    </Navbar>
</div>
  );
}

export default Barra;