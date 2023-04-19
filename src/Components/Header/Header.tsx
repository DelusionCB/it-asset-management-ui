import React, {useState} from 'react';
import './index.scss'
import logo from '../../Assets/Images/varha_logo_white.webp';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import {Link, useNavigate} from 'react-router-dom'
import {redirectToAction} from '../../Utils/routing';

function Header (args: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<Navbar>): JSX.Element {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate()

    function toggleOpen (): void {
        setIsOpen(!isOpen);
    }

    function redirect (): void {
        redirectToAction(navigate, 'create');
    }

    return (
        <>
            <Navbar expand={true} container='fluid' dark={true} {...args}>
                <Link
                    to='/'
                    relative="path"
                >
                    <img alt='Varhan logo' height={80} src={logo} />
                </Link>
                <Collapse isOpen={!isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <Link
                                to='/archive/create/new'
                                onClick={() => { redirect(); }}
                                relative="path"
                            >
                                Luo uusi arkistointi
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                to='/search'
                                relative="path"
                            >
                                Etsi arkistoja
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
                <NavbarToggler onClick={() => { toggleOpen() }} className="me-2" />
            </Navbar>
        </>
    );
}

export default Header;
