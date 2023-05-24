import {
    contractDataPropTypes,
    extendedApplicationDataProps,
    extendedDirectoryDataProps, integrationDataPropTypes,
    licenseDataPropTypes, providerDataPropTypes, serverDataPropTypes, serviceDataProps,
} from './types.directories';
// eslint-disable-next-line import/named
import {NavigateFunction} from 'react-router-dom';
// eslint-disable-next-line import/named
import {TFunction} from 'i18next';

interface basePropTypes {
    t: TFunction
    navigate: NavigateFunction
}

export interface appDisplayPropTypes extends basePropTypes {
    values: extendedApplicationDataProps
}

export interface contractDisplayPropTypes extends basePropTypes {
    values: contractDataPropTypes
}

export interface directoryDisplayPropTypes extends basePropTypes {
    values: extendedDirectoryDataProps
}

export interface licenseDisplayPropTypes extends basePropTypes {
    values: licenseDataPropTypes
}

export interface serverDisplayPropTypes extends basePropTypes {
    values: serverDataPropTypes
}

export interface serviceDisplayPropTypes extends basePropTypes {
    values: serviceDataProps
}

export interface providerDisplayPropTypes extends basePropTypes {
    values: providerDataPropTypes
}

export interface integrationDisplayPropTypes extends basePropTypes {
    values: integrationDataPropTypes
}
