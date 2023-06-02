import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ActionButton from '../ActionButton';
import '@testing-library/jest-dom'
import {BrowserRouter} from 'react-router-dom';

describe('<ActionButton />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <ActionButton disabled={false} mode='create' action='create' type='application' values={{}}/>,
            </BrowserRouter>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
