import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ApplicationForm from "../ApplicationForm";
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom'

describe('<ApplicationForm  />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <ApplicationForm type='application' isDisabled={jest.fn()} />
            </BrowserRouter>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
