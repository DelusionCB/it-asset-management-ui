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
import {licenseDisplayPropTypes} from '../../../Types/types.displays';

function LicenseDisplay ({values, t, navigate}: licenseDisplayPropTypes): JSX.Element {
    return (
        <Container className='directory-wrapper'>

            <DisplayHeader t={t} label='license.lcn' />

            <DisplayDescription t={t} label='license.description' />

            <DisplayText t={t} value={values.name} label='license.values.name' />
            <DisplayText t={t} value={values.description} label='license.values.description' />

            <DisplayText t={t} value={values.valid_from_date} label='license.values.valid_from_date' />
            <DisplayText t={t} value={values.valid_until_date} label='license.values.valid_until_date' />

            <DisplayText t={t} value={values.audits} label='license.values.audits' />
            <DisplayStatus t={t} value={values.license_type} label='license.values.license_type' />

            <DisplayObject t={t} navigate={navigate} value={values.contract} label='license.values.contract' />
            {/* <DisplayText t={t} value={values.fileUrl} label='values.fileUrl' /> */}

        </Container>
    )
}

export default LicenseDisplay;
