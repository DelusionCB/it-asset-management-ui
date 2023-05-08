import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ItemGrid from '../ItemGrid';
import '@testing-library/jest-dom'
import {BrowserRouter} from 'react-router-dom';

describe('<ItemGrid />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <ItemGrid t={jest.fn()} items={[]} />
            </BrowserRouter>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
