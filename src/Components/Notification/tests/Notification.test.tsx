import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom'
import {BrowserRouter} from 'react-router-dom';
import Notification from '../Notification';

describe('<Notification />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <Notification />
            </BrowserRouter>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
