import {Button, Row} from 'reactstrap';
import React from 'react';
import {redirectTo} from '../../Utils/routing';
import './index.scss'
import {basePropTypes, booleanPropTypes, textPropTypes, arrayPropTypes, objectPropTypes} from '../../Types/types.customComponents'

export function DisplayHeader ({t, label}: basePropTypes): JSX.Element {
    return (
        <Row className='display-header'>
            <h1>{t(label)}</h1>
        </Row>
    )
}

export function DisplayDescription ({t, label}: basePropTypes): JSX.Element {
    return (
        <Row className='display-description'>
            <h2>{t(label)}</h2>
        </Row>
    )
}

export function DisplayBoolean ({t, label, value}: booleanPropTypes): JSX.Element {
    return (
        <Row className='display'>
            <Row>
                <h3>{t(label)}:</h3>
                <p>{value ? t('yes') : t('no')}</p>
            </Row>
        </Row>
    )
}

export function DisplayText ({t, label, value}: textPropTypes): JSX.Element {
    return (
        <Row className='display'>
            <Row>
                <h3>{t(label)}</h3>
                <p>{value}</p>
            </Row>
        </Row>
    )
}

export function DisplayArray ({t, navigate, value, label}: arrayPropTypes): JSX.Element {
    return (
        <Row className='display'>
            <h3>{t(label)}:</h3>
            {value?.length
                ? value.map((child, key: number) => (
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
                                aria-label={`${t('redirect', {value: child.name})}`}
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

export function DisplayObject ({t, navigate, value, label}: objectPropTypes): JSX.Element {
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
                            aria-label={`${t('redirect', {value: value.name})}`}
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
