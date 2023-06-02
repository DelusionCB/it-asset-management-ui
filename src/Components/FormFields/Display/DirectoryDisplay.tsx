import React from 'react';
import {Container} from 'reactstrap';
import {DisplayArray, DisplayDescription, DisplayHeader, DisplayText} from '../../CustomComponents/DisplayComponents';
import './index.scss';
import {directoryDisplayPropTypes} from '../../../Types/types.displays';
import ActionButtons from '../../ActionButtons/ActionButtons';

function DirectoryDisplay ({values, t, navigate}: directoryDisplayPropTypes): JSX.Element {
    return (
        <Container className='directory-wrapper'>
            <DisplayHeader t={t} label='directory.dir' />

            <DisplayDescription t={t} label='directory.description' />

            <DisplayText t={t} value={values.name} label='directory.values.name' />
            <DisplayText t={t} value={values.description} label='directory.values.description' />

            <DisplayDescription t={t} label='directory.dependency' />

            <DisplayArray navigate={navigate} t={t} value={values.applications} label='directory.values.applications' />
            <DisplayArray navigate={navigate} t={t} value={values.services} label='directory.values.services' />
            <DisplayArray navigate={navigate} t={t} value={values.servers} label='directory.values.servers' />
            <ActionButtons
                values={values}
                type={'directory'}
                mode={'display'}
            />
        </Container>
    );
}

export default DirectoryDisplay;
