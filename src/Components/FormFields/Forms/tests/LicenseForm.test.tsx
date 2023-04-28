import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import LicenseForm from '../LicenseForm';
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom'

describe('<LicenseForm />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <LicenseForm />
            </BrowserRouter>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
