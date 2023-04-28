import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import LicenseDisplay from '../LicenseDisplay'
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom'
import {licenseDefaultValues} from '../../../../Types/types.directories';

describe('<LicenseDisplay />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <LicenseDisplay t={jest.fn()} navigate={jest.fn()} values={licenseDefaultValues} />
            </BrowserRouter>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
