import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import Footer from '../Footer';
import '@testing-library/jest-dom'

describe('<Footer />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <Footer />,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
