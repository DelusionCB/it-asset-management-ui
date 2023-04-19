import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import FormSelection from '../FormSelection';
import '@testing-library/jest-dom'

describe('<FormSelection />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <FormSelection disabled={false} onChange={jest.fn()} selections={['selection']}/>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
