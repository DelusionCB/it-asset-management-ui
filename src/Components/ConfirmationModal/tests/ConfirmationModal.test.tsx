import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ConfirmationModal from '../ConfirmationModal';
import '@testing-library/jest-dom';

// Mock for react-dom as Modal -components require it
jest.mock('react-dom', () => {
    const original = jest.requireActual('react-dom');

    return {
        ...original,
        createPortal: (node) => node,
    };
});

describe('<ConfirmationModal />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <ConfirmationModal t={jest.fn()} onConfirm={jest.fn()} onCancel={jest.fn()} type='application' values={{}} />,
        );
    });

    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
