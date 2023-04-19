import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import Header from '../Header';
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom'

describe('<Header />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
