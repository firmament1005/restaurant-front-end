import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Header from '../../components/Layout/header';
import Nav from '../../components/Layout/nav';
import Summary from '../Summary';
import Balance from '../Balance';
import Cast from '../Cast';
import SalesItem from '../SalesItem';
import ItemTotaling from '../Itemtotaling';
import DailySales from '../DailySales';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <div className='flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900'>
                <Nav />
                <Routes>
                    <Route index element={<Summary />} />
                    <Route path={'/balance'} element={<Balance />} />
                    <Route path='/cast' element={<Cast />} />
                    <Route path='/salesitem' element={<SalesItem />} />
                    <Route path='/item_totaling' element={<ItemTotaling />} />
                    <Route path='/dailysales' element={<DailySales />} />
                </Routes>
                <Outlet />
            </div>
        </div>
    )
}


export default Home;