import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import DirectoryForm from '../DirectoryForm'
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom'

describe('<DirectoryFields />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <DirectoryForm type='directory' isDisabled={jest.fn()} />
            </BrowserRouter>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
