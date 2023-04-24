import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import VisibilitySelector from '../VisibilitySelector';
import '@testing-library/jest-dom'

describe('<VisibilitySelector  />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <VisibilitySelector value='hidden' id={'id'} options={['one', 'two']} invalid={false} label='label' onChange={jest.fn()} placeholder={'placeholder'} disabled={false}/>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
