import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom'
import ArchiveForms from '../ArchiveForms';

describe('<ArchiveViewer />', () => {
    let renderer: TestRenderer.ReactTestRenderer;

    // Render the component before tests
    beforeAll(() => {
        renderer = TestRenderer.create(
            <BrowserRouter>
                <ArchiveForms />
            </BrowserRouter>,
        );
    });
    describe('Snapshot', () => {
        it('renders correctly', () => {
            expect(renderer.toJSON()).toMatchSnapshot();
        })
    })
})
