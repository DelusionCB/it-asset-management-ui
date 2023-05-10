import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ContractDisplay from '../ContractDisplay'
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom'
import {contractDefaultValues} from '../../../../Types/defaultValues';

describe('<ContractDisplay />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <ContractDisplay t={jest.fn()} navigate={jest.fn()} values={contractDefaultValues} />
            </BrowserRouter>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
