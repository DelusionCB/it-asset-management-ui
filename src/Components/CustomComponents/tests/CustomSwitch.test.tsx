import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import CustomSwitch from '../CustomSwitch';
import '@testing-library/jest-dom'

describe('<CustomSwitch />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <CustomSwitch disabled={false} id={'id'} label={'label'} onChange={jest.fn()} value={false}/>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
