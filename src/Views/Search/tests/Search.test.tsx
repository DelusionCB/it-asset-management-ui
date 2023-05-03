import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import Search from '../Search';
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom'

describe('<Search />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <Search />
            </BrowserRouter>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
