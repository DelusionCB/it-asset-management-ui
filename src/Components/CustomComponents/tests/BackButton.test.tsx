import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import BackButton from '../BackButton';
import {BrowserRouter} from 'react-router-dom';
import '@testing-library/jest-dom'

describe('<BackButton />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <BackButton />,
            </BrowserRouter>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
