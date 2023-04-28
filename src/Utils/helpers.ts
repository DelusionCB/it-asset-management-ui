import React from 'react';
import {
    extendedDirectoryDataProps,
    extendedApplicationDataProps,
} from '../Types/types.directories';
import _, {debounce} from 'lodash';

// Handle changes

export function handleDirectoryChange (
    e: React.ChangeEvent<HTMLInputElement>,
    values: extendedDirectoryDataProps,
    setValues: React.Dispatch<React.SetStateAction<extendedDirectoryDataProps>>,
): void {
    setValues({
        ...values,
        [e.target.name]: e.target.value,
    });
}

export function handleApplicationChange (
    e: React.ChangeEvent<HTMLInputElement>,
    isSwitch: boolean = false,
    values: extendedApplicationDataProps,
    setValues: React.Dispatch<React.SetStateAction<extendedApplicationDataProps>>,
): void {
    if (isSwitch) {
        setValues({
            ...values,
            [e.target.name]: e.target.checked,
        });
    } else {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }
}

export function handleDirectorySelect (
    value: {} | [] | undefined | null,
    id: string,
    values: extendedDirectoryDataProps,
    setValues: React.Dispatch<React.SetStateAction<extendedDirectoryDataProps>>,
): void {
    setValues({
        ...values,
        [id]: value,
    });
}

export function handleApplicationSelect (
    value: {} | [] | undefined | null,
    id: string,
    values: extendedApplicationDataProps,
    setValues: React.Dispatch<React.SetStateAction<extendedApplicationDataProps>>,
): void {
    setValues({
        ...values,
        [id]: value,
    });
}

// Experimental debouncing function for checking if values have changed
export const debouncedCheck = debounce((values: any, defaultValues: any, isDisabled: (disabled: boolean) => void) => {
    if (!_.isEqual(values, defaultValues)) {
        isDisabled(true);
    } else {
        isDisabled(false);
    }
}, 500);

// Function to clear certain values from form
export function handleClear<T extends Record<string, any>> (
    values: T,
    fieldsToNull: Array<keyof T>,
    fieldsToArray: Array<keyof T>,
    setValues: React.Dispatch<React.SetStateAction<T>>,
): void {
    const newState = {...values};
    if (fieldsToNull.length > 0) {
        fieldsToNull.forEach((fieldName) => {
            newState[fieldName] = null as any as T[keyof T];
        });
    }
    if (fieldsToArray.length > 0) {
        fieldsToArray.forEach((fieldName) => {
            newState[fieldName] = [] as any as T[keyof T];
        });
    }
    setValues(newState);
}
