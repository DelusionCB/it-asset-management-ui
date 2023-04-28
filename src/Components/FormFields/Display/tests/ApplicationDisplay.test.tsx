import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ApplicationDisplay from '../ApplicationDisplay';
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom'
import {appDefaultValues} from '../../../../Types/types.directories';

describe('<ApplicationDisplay />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <ApplicationDisplay t={jest.fn()} navigate={jest.fn()} values={appDefaultValues} />
            </BrowserRouter>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
