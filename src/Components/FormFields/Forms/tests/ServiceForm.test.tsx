import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom'
import ServiceForm from '../ServiceForm';

describe('<ServiceForm />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <ServiceForm editValues={{}} mode='create' type='service' isDisabled={jest.fn()} />
            </BrowserRouter>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
