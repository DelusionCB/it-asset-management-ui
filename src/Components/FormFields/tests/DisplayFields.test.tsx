import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import DisplayFields from '../FormFields';
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom'

describe('<DisplayFields />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <DisplayFields />
            </BrowserRouter>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
