import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ActionButtons from '../ActionButtons';
import '@testing-library/jest-dom'
import {BrowserRouter} from 'react-router-dom';

describe('<ActionButtons />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <ActionButtons mode='create' type='application' values={{}}/>,
            </BrowserRouter>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
