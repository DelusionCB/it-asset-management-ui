import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import App from '../App';
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom'
import DirectoryProvider from '../../../Context/DirectoryContext';

describe('<App />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <DirectoryProvider>
                    <App />
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
