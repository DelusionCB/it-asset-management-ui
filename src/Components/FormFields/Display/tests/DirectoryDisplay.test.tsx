import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import DirectoryDisplay from '../DirectoryDisplay';
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom'
import {directoryDefaultValues} from '../../../../Types/defaultValues';

describe('<DirectoryDisplay />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <DirectoryDisplay t={jest.fn()} navigate={jest.fn()} values={directoryDefaultValues} />
            </BrowserRouter>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
