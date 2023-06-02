import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import FormFields from '../FormFields';
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom'

describe('<FormFields />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <FormFields mode='create' params={{}} loading={false} />
            </BrowserRouter>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
