import React from 'react';
import {
    appDependencyItemProps,
    contractDataPropTypes, integrationDataPropTypes,
    licenseItemProps, providerDataPropTypes,
    serverDataPropTypes,
    serviceDataProps,
} from './types.directories';

// eslint-disable-next-line import/named
import {NavigateFunction} from 'react-router-dom';
// eslint-disable-next-line import/named
import {TFunction} from 'i18next';

export interface textFieldProps {
    label: string
    validation?: object
    value?: string | undefined
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type: 'text' | 'file' | 'textarea' | 'date' | 'email'
    id: string
    placeholder: string
    disabled: boolean
    invalid: boolean
}

export interface visibilitySelectorProps {
    label: string
    validation?: object
    value: string | undefined
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    options: string[]
    id: string
    placeholder: string
    disabled: boolean
    invalid: boolean
}

export interface staticSelectPropTypes {
    label: string
    validation?: object
    value: string | undefined
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    options: string[]
    id: string
    placeholder: string
    disabled: boolean
    invalid: boolean
}

export interface customSelectionProps {
    onChange: (e: string) => void
    selections: string[]
    disabled: boolean
    label: string
}

export interface customSwitchProps {
    value: boolean
    label: string
    validation?: object
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    id: string
    disabled: boolean
    invalid: boolean
}

export interface searchableSelectPropTypes {
    label: string
    validation?: object
    value: object[] | object | undefined | null
    onChange: (value: MyOption | readonly MyOption[] | undefined | null, id: string) => void
    endpoint: string
    id: string
    placeholder: string
    disabled: boolean
    invalid: boolean
    isMulti: boolean
}

export interface asyncSelectPropTypes {
    label: string
    validation?: object
    value: object[] | object | undefined | null
    onChange: (value: MyOption | readonly MyOption[] | undefined | null, id: string) => void
    endpoint: string
    id: string
    placeholder: string
    disabled: boolean
    invalid: boolean
    isMulti: boolean
    isSearchable: boolean
}

export interface MyOption {label: string, value: number}

// Display components

type ItemProps = serverDataPropTypes | licenseItemProps | appDependencyItemProps | contractDataPropTypes | serviceDataProps | providerDataPropTypes | integrationDataPropTypes;

export interface basePropTypes {
    t: TFunction
    label: string
}

export interface objectPropTypes extends basePropTypes {
    value: ItemProps | null
    navigate: NavigateFunction
}

export interface arrayPropTypes extends basePropTypes {
    value: ItemProps[]
    navigate: NavigateFunction
}

export interface textArrayPropTypes extends basePropTypes {
    value: ItemProps[]
}

export interface textPropTypes extends basePropTypes {
    value: string | number
}

export interface urlPropTypes extends basePropTypes {
    value: string
}

export interface booleanPropTypes extends basePropTypes {
    value: boolean
}
