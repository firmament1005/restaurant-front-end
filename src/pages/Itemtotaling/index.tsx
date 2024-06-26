import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMaxDate } from '../../utils/Date';
import Table from './Table';


const ItemTotaling: React.FC = () => {

    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [maxDate, setMaxDate] = useState(0);

    useEffect(() => {
        const currentDate = new Date();
        setMaxDate(getMaxDate({ Year: selectedYear == 0 ? currentDate.getFullYear() : selectedYear, Month: selectedMonth == 0 ? currentDate.getMonth() : selectedMonth }));
    }, [selectedYear, selectedMonth])

    const handleSelectedYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(parseInt(e.target.value));
    }

    const handleSelectedMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMonth(parseInt(e.target.value));
    }

    return (
        <div className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900 p-4">
            <div className="w-full mb-1">
                <div className="mb-4">
                    <nav className="flex mb-5" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                            <li className="inline-flex items-center">
                                <Link to="/home/balance" className="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-sky-500 dark:hover:text-white">
                                    <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                    収支明細(月次)
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                    <Link to="/home/salesitem" className="ml-1 text-gray-700 dark:text-sky-500 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">
                                        売上商品集計
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                    <Link to="" className="ml-1 text-white hover:text-primary-600 md:ml-2  dark:hover:text-white">
                                        商品別ー集計
                                    </Link>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <div className='flex flex-row justify-end'>
                        <div className='flex flex-row'>
                            <div className="bg-gray-50 relative pr-1 border border-gray-300 rounded-lg flex flex-row dark:bg-gray-700 w-auto" >
                                <svg className="w-10 h-10 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z"></path>
                                    <path clipRule="evenodd" fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"></path>
                                </svg>
                                <div className='flex flex-row'>
                                    <select
                                        className="bg-gray-50 focus:outline-none border-0 text-gray-900 text-sm block w-full w-auto dark:bg-gray-700 dark:text-white"
                                        onChange={handleSelectedYear}
                                        value={selectedYear}>
                                        <option className='text-center' value="2020">2020 年 </option>
                                        <option className='text-center' value="2021">2021 年 </option>
                                        <option className='text-center' value="2022">2022 年 </option>
                                        <option className='text-center' value="2023">2023 年 </option>
                                        <option className='text-center' value="2024">2024 年 </option>
                                        <option className='text-center' value="2025">2025 年 </option>
                                        <option className='text-center' value="2026">2026 年 </option>
                                    </select>
                                    <select
                                        className="bg-gray-50 focus:outline-none border-0 w-auto text-gray-900 text-sm block w-full pl-3 p-2.5 dark:bg-gray-700 dark:text-white"
                                        onChange={handleSelectedMonth}
                                        value={selectedMonth}>
                                        {
                                            Array.from({ length: 12 }, (_, index) => (
                                                <option className='text-center' value={index + 1}>{index + 1} 月</option>
                                            ))
                                        }
                                    </select>
                                    <select className="focus:outline-none border-0 text-sm w-auto p-2.5 dark:bg-gray-700 dark:text-white">
                                        <option className='text-center' value="store_1">1月~15月</option>
                                        <option className='text-center' value="store_2">15月~{maxDate}月</option>
                                        <option className='text-center' value="store_3">All</option>
                                    </select>
                                </div>
                            </div>
                            <button className='text-white dark:bg-green-700 ml-3 px-5 rounded-lg border border-gray-300'>Excel</button>
                        </div>
                    </div>
                </div>
            </div>
            <Table Year={selectedYear} Month={selectedMonth} />
        </div>
    )
}


export default ItemTotaling;