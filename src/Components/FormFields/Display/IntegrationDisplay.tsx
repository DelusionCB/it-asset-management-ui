import {Container} from 'reactstrap';
import React from 'react';
import {
    DisplayDescription,
    DisplayHeader,
    DisplayObject,
    DisplayStatus,
    DisplayText,
} from '../../CustomComponents/DisplayComponents';
import './index.scss';
import {integrationDisplayPropTypes} from '../../../Types/types.displays';

function IntegrationDisplay ({values, t, navigate}: integrationDisplayPropTypes): JSX.Element {
    return (
        <Container className='directory-wrapper'>

            <DisplayHeader t={t} label='integration.int' />

            <DisplayDescription t={t} label='integration.description' />

            <DisplayText t={t} value={values.name} label='integration.values.name' />

            <DisplayText t={t} value={values.description} label='integration.values.description' />

            <DisplayObject value={values.server_platform} navigate={navigate} t={t} label='integration.values.server_platform' />

            <DisplayStatus value={values.environment_type} t={t} label='integration.values.environment_type' />

        </Container>
    )
}

export default IntegrationDisplay;
