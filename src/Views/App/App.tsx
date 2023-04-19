// Assets
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Assets/colors.scss';
import '../../Assets/fonts.scss'
import './index.scss'

import React from 'react';
import {Routes, Route, Outlet} from 'react-router-dom';

// Top level components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

// Views
import Homepage from '../Homepage/Homepage';
import FormViewer from '../FormViewer/FormViewer';
import Search from '../Search/Search';
import FormFields from '../../Components/FormFields/FormFields';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Homepage />} />
                <Route path="/:path/:id" element={<FormViewer />} />
                <Route path="/archive/:action/:id" element={<FormFields />} />
                <Route path="/search" element={<Search />} />
            </Route>
        </Routes>
    );
}

const Layout: React.FC = () => {
    return (
        <div className='container-wrapper'>
            <Header />
            <main id='main'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default App;