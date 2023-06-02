import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ArchiveViewer from '../ArchiveViewer';
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom'

describe('<ArchiveViewer />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <ArchiveViewer />
            </BrowserRouter>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
