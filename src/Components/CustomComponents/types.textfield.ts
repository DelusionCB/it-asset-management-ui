import React from 'react';

export interface ITextField {
    name: string
    key: number
    onChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void
    previous: null | string
    results: object[]
}
