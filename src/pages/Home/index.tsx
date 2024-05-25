import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Header from '../../components/Layout/header';
import Nav from '../../components/Layout/nav';
import Summary from '../Summary';
import Balance from '../Balance';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <div className='flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900'>
                <Nav />

                <Routes>
                    <Route index element={<Summary />} />
                    <Route path={'/balance'} element={<Balance />} />
                </Routes>

                <Outlet />
            </div>
        </div>
    )
}


export default Home;