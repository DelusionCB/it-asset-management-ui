import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ServiceDisplay from '../ServiceDisplay';
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom'
import {serviceDefaultValues} from '../../../../Types/types.directories';

describe('<ServiceDisplay />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <ServiceDisplay t={jest.fn()} navigate={jest.fn()} values={serviceDefaultValues} />
            </BrowserRouter>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
