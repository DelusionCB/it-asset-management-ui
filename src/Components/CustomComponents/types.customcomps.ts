import React from 'react';

export interface TextFieldProps {
    label: string
    validation?: object
    value?: string | undefined
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type: 'text' | 'file' | 'textarea'
    id: string
    placeholder: string
    disabled: boolean
    invalid: boolean
}

export interface VisibilitySelectorProps {
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

export interface CustomSelectionProps {
    onChange: (e: string) => void
    selections: string[]
    disabled: boolean
}

export interface CustomSwitchProps {
    value: boolean
    label: string
    validation?: object
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    id: string
    disabled: boolean
    invalid: boolean
}

export interface CustomSelectProps {
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

export interface MyOption {label: string, value: number}
