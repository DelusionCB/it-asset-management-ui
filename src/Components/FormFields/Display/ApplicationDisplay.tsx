import React from 'react';
import {Container, Row} from 'reactstrap';
import {
    DisplayArray,
    DisplayBoolean,
    DisplayDescription,
    DisplayHeader,
    DisplayObject, DisplayStatus,
    DisplayText, DisplayTextArray,
} from '../../CustomComponents/DisplayComponents';
import './index.scss';
import {appDisplayPropTypes} from '../../../Types/types.displays';
import ActionButtons from '../../ActionButtons/ActionButtons';

function ApplicationDisplay ({values, t, navigate}: appDisplayPropTypes): JSX.Element {
    return (
        <Container className='directory-wrapper'>

            <DisplayHeader t={t} label='application.app' />

            <DisplayDescription t={t} label='application.description' />

            <DisplayText t={t} value={values.name} label='application.values.name' />
            <DisplayText t={t} value={values.description} label='application.values.description' />
            <DisplayText t={t} value={values.classification} label='application.values.classification' />
            <DisplayTextArray t={t} value={values.customership} label='application.values.customership' />
            <DisplayStatus t={t} value={values.application_status} label='application.values.application_status' />
            <DisplayBoolean t={t} value={values.person_register} label='application.values.person_register' />
            <DisplayBoolean t={t} value={values.personal_info_logging} label='application.values.personal_info_logging' />
            <DisplayText t={t} value={values.install_info} label='application.values.install_info' />

            <DisplayText t={t} value={values.keywords} label='application.values.keywords' />

            <DisplayDescription t={t} label='application.dependency' />

            <DisplayArray t={t} navigate={navigate} value={values.installed_server} label='application.values.installed_server' />
            <DisplayArray navigate={navigate} t={t} value={values.service_dependency} label='application.values.service_dependency' />
            <DisplayArray navigate={navigate} t={t} value={values.integration} label='application.values.integration' />
            <DisplayObject t={t} navigate={navigate} value={values.license} label='application.values.license' />
            <DisplayObject t={t} navigate={navigate} value={values.contract} label='application.values.contract' />
            <DisplayArray t={t} navigate={navigate} value={values.application_dependency} label='application.values.application_dependency' />

            <DisplayDescription t={t} label='application.continuity' />

            <DisplayText t={t} value={values.update_practice} label='application.values.update_practice' />
            <DisplayText t={t} value={values.security_practice_monitoring} label='application.values.security_practice_monitoring' />
            <DisplayText t={t} value={values.recovery_practices_convalescence} label='application.values.recovery_practices_convalescence' />
            <DisplayText t={t} value={values.user_rights_management} label='application.values.user_rights_management' />
            <DisplayText t={t} value={values.security_solutions} label='application.values.security_solutions' />

            <DisplayDescription t={t} label='application.responsibility' />

            <DisplayText t={t} value={values.product_owner} label='application.values.product_owner' />
            <DisplayText t={t} value={values.application_holder} label='application.values.application_holder' />
            <DisplayText t={t} value={values.admin_users} label='application.values.admin_users' />
            <DisplayText t={t} value={values.liability_professional_users} label='application.values.liability_professional_users' />
            <DisplayText t={t} value={values.holder_extra_info} label='application.values.holder_extra_info' />

            <Row>
                <h3>Käyttöoikeusvastaavat:</h3>
                <p></p>
            </Row>

            <DisplayObject navigate={navigate} t={t} value={values.provider} label='application.values.provider' />
            <DisplayText t={t} value={values.provider_responsibility} label='application.values.provider_responsibility' />
            <DisplayText t={t} value={values.additional_contacts} label='application.values.additional_contacts' />

            <DisplayDescription t={t} label='application.extra' />

            <DisplayText t={t} value={values.known_issues} label='application.values.known_issues' />
            {/* <DisplayText t={t} value={values.fileUrl} label='values.fileUrl' /> */}
            <ActionButtons
                values={values}
                type={'application'}
                mode={'display'}
            />
        </Container>
    );
}

export default ApplicationDisplay;
