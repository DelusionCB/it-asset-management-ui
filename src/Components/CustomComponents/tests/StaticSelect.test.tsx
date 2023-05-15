import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import StaticSelect from '../StaticSelect';
import '@testing-library/jest-dom'

describe('<StaticSelect />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <StaticSelect
                invalid={false}
                id='id'
                label='label'
                onChange={jest.fn()}
                placeholder={'placeholder'}
                value={undefined}
                disabled={false}
                options={['1', '2']}
            />,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
