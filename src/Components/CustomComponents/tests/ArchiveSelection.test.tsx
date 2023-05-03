import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ArchiveSelection from '../ArchiveSelection';
import '@testing-library/jest-dom'

describe('<ArchiveSelection />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <ArchiveSelection label='label' disabled={false} onChange={jest.fn()} selections={['selection']}/>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
