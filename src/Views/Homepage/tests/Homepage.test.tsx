import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import Homepage from '../Homepage';
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom'
import DirectoryProvider from '../../../Context/DirectoryContext';

describe('<Homepage />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <DirectoryProvider>
                    <Homepage />
                </DirectoryProvider>
            </BrowserRouter>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
