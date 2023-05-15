import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import AsyncSelect from '../AsyncSelect';
import '@testing-library/jest-dom'

describe('<AsyncSelect />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <AsyncSelect
                isSearchable={false}
                invalid={false}
                isMulti={false}
                endpoint='endpoint'
                id='id'
                label='label'
                onChange={jest.fn()}
                placeholder={'placeholder'}
                value={null}
                disabled={false}
            />,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
