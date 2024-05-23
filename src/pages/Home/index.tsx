import React from 'react';
import { useMatch, Route, Routes, useLocation, Outlet } from 'react-router-dom';
import Header from '../../components/Layout/header';
import Nav from '../../components/Layout/nav';
import Summary from '../Summary';
import Cast from '../Cast';

const Home: React.FC = () => {
    const match = useMatch("/");
    const currentLocation = useLocation();
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