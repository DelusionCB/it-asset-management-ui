import {
    contractDataProps,
    extendedApplicationDataProps,
    extendedDirectoryDataProps,
    LicenseDataProps, serverDataProps, serviceDataProps,
} from './types.directories';
// eslint-disable-next-line import/named
import {NavigateFunction} from 'react-router-dom';
// eslint-disable-next-line import/named
import {TFunction} from 'i18next';

export interface appDisplayPropTypes {
    values: extendedApplicationDataProps
    t: TFunction
    navigate: NavigateFunction
}

export interface contractDisplayPropTypes {
    values: contractDataProps
    t: TFunction
    navigate: NavigateFunction
}

export interface directoryDisplayPropTypes {
    values: extendedDirectoryDataProps
    t: TFunction
    navigate: NavigateFunction
}

export interface licenseDisplayPropTypes {
    values: LicenseDataProps
    t: TFunction
    navigate: NavigateFunction
}

export interface serverDisplayPropTypes {
    values: serverDataProps
    t: TFunction
    navigate: NavigateFunction
}

export interface serviceDisplayPropTypes {
    values: serviceDataProps
    t: TFunction
    navigate: NavigateFunction
}
