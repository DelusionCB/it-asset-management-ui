import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ServerDisplay from '../ServerDisplay';
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom'
import {serverDefaultValues} from '../../../../Types/defaultValues';

describe('<ServerDisplay />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <ServerDisplay t={jest.fn()} navigate={jest.fn()} values={serverDefaultValues} />
            </BrowserRouter>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
