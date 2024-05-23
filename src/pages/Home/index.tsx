import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Header from '../../components/Layout/header';
import Nav from '../../components/Layout/nav';
import Summary from '../Summary';
import Cast from '../Cast';

const Home: React.FC = () => {
    return (
        <div>
            <Header />

            <Nav />

            <Routes>
                <Route index element={<Summary />} />
                <Route path={'/cast'} element={<Cast />} />
            </Routes>

            <Outlet />
        </div>
    )
}


export default Home;