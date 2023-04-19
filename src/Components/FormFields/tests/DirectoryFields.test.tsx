import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import DirectoryFields from '../FormFields';
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom'

describe('<DirectoryFields />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <DirectoryFields />
            </BrowserRouter>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
