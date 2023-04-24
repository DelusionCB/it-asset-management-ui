import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import TextField from '../TextField';
import '@testing-library/jest-dom'

describe('<TextField  />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <TextField id={'id'} type='text' invalid={false} label='label' onChange={jest.fn()} placeholder={'placeholder'} disabled={false}/>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
