import React, {useState} from 'react';
import './index.scss'
import logo from '../../Assets/Images/varha_logo_white.webp';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem, Button,
} from 'reactstrap';
import {Link, useNavigate} from 'react-router-dom'
import {redirectToAction} from '../../Utils/routing';
import {useTranslation} from 'react-i18next';

function Header (args: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<Navbar>): JSX.Element {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate()
    const {t} = useTranslation()

    function toggleOpen (): void {
        setIsOpen(!isOpen);
    }

    function redirect (action: string = 'create', form: boolean = false): void {
        if (form) {
            redirectToAction(navigate, action);
        } else {
            navigate(action)
        }
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
                            <Button
                                className='navlink-button'
                                role='link'
                                aria-label={`${t('create-new')}`}
                                onClick={() => { redirect('create', true) }}
                            >
                                <span>{t('create-new')}</span>
                                <i className="bi bi-plus" />
                            </Button>
                        </NavItem>
                        <NavItem>
                            <Button
                                className='navlink-button'
                                role='link'
                                aria-label={`${t('archive-fetch')}`}
                                onClick={() => { redirect('search', false) }}
                            >
                                <span>{t('archive-fetch')}</span>
                                <i className='bi bi-search' />
                            </Button>
                        </NavItem>
                    </Nav>
                </Collapse>
                <NavbarToggler onClick={() => { toggleOpen() }} className="me-2" />
            </Navbar>
        </>
    );
}

export default Header;
