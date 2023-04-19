import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import FormViewer from '../FormViewer';
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom'

describe('<FormViewer />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <FormViewer />
            </BrowserRouter>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
