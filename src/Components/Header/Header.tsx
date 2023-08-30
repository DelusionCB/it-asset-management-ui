import React, {useState} from 'react';
import './index.scss'
import {
    Collapse,
    Navbar,
    NavbarToggler,
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
        <header className='main-navbar'>
            <div className='bar'>
                <Link
                    className='bar__logo'
                    to='/'
                    relative="path"
                    aria-label='Linkki etusivulle, Varhan logo'
                />
                <div className='bar__login'>
                    <Button role='link' disabled={true}>
                        <i className="bi bi-person-fill-lock" />
                        <span>{t('user.login')}</span>
                    </Button>
                </div>
            </div>

            <Navbar role='navigation' className='mappi-bar' expand='xl'>
                <NavbarToggler onClick={() => { toggleOpen() }} />
                <Collapse isOpen={!isOpen} navbar>
                    <ul className='mappi-bar__links'>
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
                        <NavItem>
                            <Button
                                className='navlink-button'
                                role='link'
                                disabled={true}
                                aria-label={`${t('archive-fetch')}`}
                                onClick={() => { redirect('search', false) }}
                            >
                                <span>Tilastot</span>
                                <i className='bi bi-graph-up-arrow' />
                            </Button>
                        </NavItem>
                        <NavItem>
                            <Button
                                className='navlink-button'
                                role='link'
                                disabled={true}
                                aria-label={`${t('archive-fetch')}`}
                                onClick={() => { redirect('search', false) }}
                            >
                                <span>Hallintapaneeli</span>
                                <i className='bi bi-wrench' />
                            </Button>
                        </NavItem>
                    </ul>
                </Collapse>
            </Navbar>
        </header>
    );
}

export default Header;
