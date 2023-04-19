import React from 'react';
import Directory from '../../Components/Directory/Directory';

function Homepage (): JSX.Element {
    return (
        <div>
            <div>
                <h1>Tervetuloa IT- ja omaisuuden hallintaan!</h1>
            </div>
            <div>
                <Directory />
            </div>
        </div>
    );
}

export default Homepage;
