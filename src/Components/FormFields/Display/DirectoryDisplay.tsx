import React from 'react';
import {Container} from 'reactstrap';
import {DisplayArray, DisplayDescription, DisplayHeader, DisplayText} from '../../CustomComponents/DisplayComponents';
import './index.scss';
import {directoryDisplayPropTypes} from '../../../Types/types.displays';

function DirectoryDisplay ({values, t, navigate}: directoryDisplayPropTypes): JSX.Element {
    return (
        <Container className='directory-wrapper'>
            <DisplayHeader t={t} label='directory.dir' />

            <DisplayDescription t={t} label='directory.description' />

            <DisplayText t={t} value={values.name} label='values.name' />
            <DisplayText t={t} value={values.description} label='values.description' />

            <DisplayDescription t={t} label='directory.dependency' />

            <DisplayArray navigate={navigate} t={t} value={values.applications} label='values.applications' />
            <DisplayArray navigate={navigate} t={t} value={values.services} label='values.services' />
            <DisplayArray navigate={navigate} t={t} value={values.servers} label='values.servers' />
        </Container>
    );
}

export default DirectoryDisplay;
