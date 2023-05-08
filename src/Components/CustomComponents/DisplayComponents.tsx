import {Button, Row} from 'reactstrap';
import React from 'react';
import {redirectTo} from '../../Utils/routing';
import {
    appDependencyItemProps,
    contractDataProps,
    licenseItemProps,
    serverDataProps, serviceDataProps,
} from '../../Types/types.directories';
import './index.scss'

interface headerProps {
    t: any
    label: string
}

export function DisplayHeader ({t, label}: headerProps): JSX.Element {
    return (
        <Row className='display-header'>
            <h1>{t(label)}</h1>
        </Row>
    )
}

interface descProps {
    t: any
    label: string
}

export function DisplayDescription ({t, label}: descProps): JSX.Element {
    return (
        <Row className='display-description'>
            <h2>{t(label)}</h2>
        </Row>
    )
}

interface booleanProps {
    t: any
    value: boolean
    label: string
}

export function DisplayBoolean ({t, label, value}: booleanProps): JSX.Element {
    return (
        <Row className='display'>
            <Row>
                <h3>{t(label)}:</h3>
                <p>{value ? t('yes') : t('no')}</p>
            </Row>
        </Row>
    )
}

interface textProps {
    t: any
    value: string | null
    label: string
}

export function DisplayText ({t, label, value}: textProps): JSX.Element {
    return (
        <Row className='display'>
            <Row>
                <h3>{t(label)}</h3>
                <p>{value}</p>
            </Row>
        </Row>
    )
}

type arrayItemProps = serverDataProps | licenseItemProps | appDependencyItemProps | contractDataProps | serviceDataProps;

interface arrayProps {
    t: any
    navigate: Function
    value: arrayItemProps[]
    label: string
}

export function DisplayArray ({t, navigate, value, label}: arrayProps): JSX.Element {
    return (
        <Row className='display'>
            <h3>{t(label)}:</h3>
            {value?.length
                ? value.map((child, key) => (
                    <div className='array' key={key}>
                        <Row><h3>Sidos Nro. {key + 1}</h3></Row>
                        <Row>
                            <h4>{t('values.name')}:</h4>
                            <p>{child.name}</p>
                        </Row>
                        <Row>
                            <h4>{t('values.description')}:</h4>
                            <p>{child.description}</p>
                        </Row>
                        <Row>
                            <Button
                                className='redirect-button'
                                role='link'
                                aria-label={t('redirect', {value: child.name})}
                                onClick={() => { redirectTo(navigate, child.id_prefix, child.base_id) }}
                            >
                                <span>{t('redirect', {value: child.name})}</span>
                                <i className='bi bi-arrow-right' />
                            </Button>
                        </Row>
                    </div>
                ))
                : <>
                    <h4>{t('no-connections')}</h4>
                </>
            }
        </Row>
    )
}

type objectItemProps = serverDataProps | licenseItemProps | appDependencyItemProps | contractDataProps | serviceDataProps;

interface objectProps {
    t: any
    navigate: Function
    value: objectItemProps | null | undefined
    label: string
}

export function DisplayObject ({t, navigate, value, label}: objectProps): JSX.Element {
    return (
        <Row className='display'>
            <h3>{t(label)}:</h3>
            {value
                ? <div className='object'>
                    <Row>
                        <h4>{t('values.name')}:</h4>
                        <p>{value.name}</p>
                    </Row>
                    <Row>
                        <h4>{t('values.description')}:</h4>
                        <p>{value.description}</p>
                    </Row>
                    <Row>
                        <Button
                            className='redirect-button'
                            aria-label={t('redirect', {value: value.name})}
                            role='link'
                            onClick={() => { value && redirectTo(navigate, value.id_prefix, value.base_id) }}
                        >
                            <span>{value ? t('redirect', {value: value.name}) : '-'}</span>
                            <i className='bi bi-arrow-right' />
                        </Button>
                    </Row>
                </div>
                : <div>
                    <h4>{t('no-connections')}</h4>
                </div>
            }
        </Row>
    )
}
