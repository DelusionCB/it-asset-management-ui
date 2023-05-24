import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom'
import ProviderForm from '../ProviderForm';

describe('<ProviderForm />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <ProviderForm type='provider' isDisabled={jest.fn()} />
            </BrowserRouter>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
