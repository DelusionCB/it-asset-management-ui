import React from 'react';
import {Container, Row} from 'reactstrap';
import {extendedApplicationDataProps} from '../../../Types/types.directories';
import {
    DisplayArray,
    DisplayBoolean,
    DisplayDescription,
    DisplayHeader,
    DisplayObject,
    DisplayText,
} from '../../CustomComponents/DisplayComponents';

interface appDisplayProps {
    values: extendedApplicationDataProps
    t: any
    navigate: any
}

function ApplicationDisplay ({values, t, navigate}: appDisplayProps): JSX.Element {
    return (
        <Container className='directoryvalues-page'>

            <DisplayHeader t={t} label='application.app' />

            <DisplayDescription t={t} label='application.description' />

            <DisplayText t={t} value={values.name} label='values.name' />
            <DisplayText t={t} value={values.description} label='values.description' />
            <DisplayText t={t} value={values.classification} label='values.classification' />
            <DisplayText t={t} value={values.place_of_use} label='values.place_of_use' />
            <DisplayBoolean t={t} value={values.person_register} label='values.person_register' />
            <DisplayBoolean t={t} value={values.personal_info_logging} label='values.personal_info_logging' />
            <DisplayText t={t} value={values.install_info} label='values.install_info' />

            <Row>
                <h3>Avainsanat:</h3>
                <p>{values.keywords}</p>
            </Row>

            <DisplayDescription t={t} label='application.dependency' />

            <DisplayObject t={t} navigate={navigate} value={values.installed_server} label='values.installed_server' />
            <DisplayArray navigate={navigate} t={t} value={values.service_dependency} label='values.service_dependency' />
            {/* <DisplayArray navigate={navigate} t={t} value={values.integration} label='values.integration' /> */}
            <DisplayObject t={t} navigate={navigate} value={values.license} label='values.license' />
            <DisplayObject t={t} navigate={navigate} value={values.contract} label='values.contract' />
            <DisplayObject t={t} navigate={navigate} value={values.application_dependency} label='values.application_dependency' />

            <DisplayDescription t={t} label='application.continuity' />

            <DisplayText t={t} value={values.update_practice} label='values.update_practice' />
            <DisplayText t={t} value={values.security_practice_monitoring} label='values.security_practice_monitoring' />
            <DisplayText t={t} value={values.recovery_practices_convalescence} label='values.recovery_practices_convalescence' />
            <DisplayText t={t} value={values.user_rights_management} label='values.user_rights_management' />
            <DisplayText t={t} value={values.security_solutions} label='values.security_solutions' />

            <DisplayDescription t={t} label='application.responsibility' />

            <DisplayText t={t} value={values.product_owner} label='values.product_owner' />
            <DisplayText t={t} value={values.application_holder} label='values.application_holder' />
            <DisplayText t={t} value={values.admin_users} label='values.admin_users' />
            <DisplayText t={t} value={values.liability_professional_users} label='values.liability_professional_users' />
            <DisplayText t={t} value={values.holder_extra_info} label='values.holder_extra_info' />

            <Row>
                <h3>Käyttöoikeusvastaavat:</h3>
                <p></p>
            </Row>

            <DisplayText t={t} value={values.provider} label='values.provider' />
            <DisplayText t={t} value={values.provider_responsibility} label='values.provider_responsibility' />
            <DisplayText t={t} value={values.additional_contacts} label='values.additional_contacts' />

            <DisplayDescription t={t} label='application.extra' />

            <DisplayText t={t} value={values.known_issues} label='values.known_issues' />
            <DisplayText t={t} value={values.fileUrl} label='values.fileUrl' />
        </Container>
    );
}

export default ApplicationDisplay;
