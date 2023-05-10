import {Container} from 'reactstrap';
import React from 'react';
import {DisplayDescription, DisplayHeader, DisplayText} from '../../CustomComponents/DisplayComponents';
import './index.scss';
import {contractDisplayPropTypes} from '../../../Types/types.displays';

function ContractDisplay ({values, t, navigate}: contractDisplayPropTypes): JSX.Element {
    return (
        <Container className='directory-wrapper'>

            <DisplayHeader t={t} label='contract.con' />

            <DisplayDescription t={t} label='contract.description' />

            <DisplayText t={t} value={values.name} label='values.name' />
            <DisplayText t={t} value={values.description} label='values.description' />
            <DisplayText t={t} value={values.placeholder} label='values.placeholder' />

        </Container>
    )
}

export default ContractDisplay;
