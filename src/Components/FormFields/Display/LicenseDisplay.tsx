import {Container} from 'reactstrap';
import React from 'react';
import {LicenseDataProps} from '../../../Types/types.directories';
import {DisplayDescription, DisplayHeader, DisplayText} from '../../CustomComponents/DisplayComponents';
import './index.scss';

interface licDisplayProps {
    values: LicenseDataProps
    t: any
    navigate: any
}

function LicenseDisplay ({values, t, navigate}: licDisplayProps): JSX.Element {
    return (
        <Container className='directory-wrapper'>

            <DisplayHeader t={t} label='license.lcn' />

            <DisplayDescription t={t} label='license.description' />

            <DisplayText t={t} value={values.name} label='values.name' />
            <DisplayText t={t} value={values.description} label='values.description' />

            <DisplayText t={t} value={values.valid_from_date} label='values.valid_from_date' />
            <DisplayText t={t} value={values.valid_until_date} label='values.valid_until_date' />

            <DisplayText t={t} value={values.license_type} label='values.license_type' />

            <DisplayText t={t} value={values.contract} label='values.contract' />
            <DisplayText t={t} value={values.fileUrl} label='values.fileUrl' />

        </Container>
    )
}

export default LicenseDisplay;
