import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom'
import {providerDefaultValues} from '../../../../Types/defaultValues';
import ProviderDisplay from '../ProviderDisplay';

describe('<ProviderDisplay />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <ProviderDisplay t={jest.fn()} navigate={jest.fn()} values={providerDefaultValues} />
            </BrowserRouter>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
