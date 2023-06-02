import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import DisplayFields from '../DisplayFields';
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom'
import {
    extendedApplicationDataProps,
} from '../../../Types/types.directories';

describe('<DisplayFields />', () => {
    let renderer: TestRenderer.ReactTestRenderer;
    // Render the component before tests

    const item: extendedApplicationDataProps = {
        base_id: '123',
        name: 'Application Name',
        visibility: 'Public',
        description: 'Application Description',
        created_time: '2023-01-01',
        last_modified_time: '2023-05-01',
        classification: 'Application Classification',
        customership: [],
        application_status: 'Active',
        person_register: true,
        personal_info_logging: false,
        install_info: 'Installation Info',
        keywords: 'Keyword 1, Keyword 2',
        update_practice: 'Update Practice',
        security_practice_monitoring: 'Security Practice Monitoring',
        recovery_practices_convalescence: 'Recovery Practices Convalescence',
        log_archives: 'Log Archives',
        user_rights_management: 'User Rights Management',
        security_solutions: 'Security Solutions',
        product_owner: 'Product Owner',
        application_holder: 'Application Holder',
        admin_users: 'Admin Users',
        liability_professional_users: 'Liability Professional Users',
        holder_extra_info: 'Holder Extra Info',
        provider: null,
        provider_responsibility: 'Provider Responsibility',
        additional_contacts: 'Additional Contacts',
        known_issues: 'Known Issues',
        contract: null,
        fileUrl: null,
        license: null,
        installed_server: [],
        service_dependency: [],
        integration: [],
        application_dependency: [],
    };

    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <DisplayFields<extendedApplicationDataProps>
                    type="application"
                    loading={false}
                    item={item}
                />
            </BrowserRouter>,
        );
    });

    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
