import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import Searchbar from '../Searchbar';
import '@testing-library/jest-dom'

describe('<Searchbar />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <Searchbar t={jest.fn()} onFormSubmit={jest.fn()} />,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
