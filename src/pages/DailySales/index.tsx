import React, { useState, useEffect } from 'react';
import { getMaxDate } from '../../utils/Date';
import { Link } from 'react-router-dom';
import SalesReportTable from './SalesReportTable';
import CashManagementTable from './CashManagementTable';
import WithdrawalTable from './WithdrawalTable';
import DepositTable from './DepositTable';
import SlipsTable from './SlipsTable';
import CastReportTable from './CastReportTable';
import StaffReportTable from './StaffReportTable';

const DailySales: React.FC = () => {
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [selectedDay, setSelectedDay] = useState(new Date().getDate());
    const [maxDate, setMaxDate] = useState(0);

    useEffect(() => {
        console.log(selectedDay);
        const currentDate = new Date();
        setMaxDate(getMaxDate({ Year: selectedYear === 0 ? currentDate.getFullYear() : selectedYear, Month: selectedMonth === 0 ? currentDate.getMonth() : selectedMonth }));
    }, [selectedYear, selectedMonth])

    const handleSelectedYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(parseInt(e.target.value));
    }

    const handleSelectedMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMonth(parseInt(e.target.value));
    }

    const handleSelectedDay = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDay(parseInt(e.target.value));
    }

    return (
        <div className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900 p-4">
            <div className="w-full mb-1">
                <div className="mb-4">
                    <nav className="flex mb-5" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                            <li className="inline-flex items-center">
                                <Link to="/home/dailysales" className="inline-flex items-center text-white hover:text-primary-600 dark:hover:text-white">
                                    <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                    収支明細(日次)
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                    <Link to="/home/balance" className="ml-1 text-gray-700 dark:text-sky-500 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">
                                        収支明細(月次)
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
                                    <select
                                        className="focus:outline-none border-0 text-sm w-auto p-2.5 dark:bg-gray-700 dark:text-white"
                                        value={selectedDay}
                                        onChange={handleSelectedDay}>
                                        {maxDate !== 0 ? (
                                            Array.from({ length: maxDate }, (_, index) => (
                                                <option className='text-center' value={index + 1}>{index + 1 < 9 ? "0" + (index + 1) : index + 1}</option>
                                            ))
                                        ) : (
                                            <p>Loading...</p>
                                        )}
                                    </select>
                                </div>
                            </div>
                            <button className='text-white dark:bg-green-700 ml-3 px-5 rounded-lg border border-gray-300'>Excel</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between sm:flex-row flex-col'>
                <SalesReportTable />
                <CashManagementTable />
            </div>
            <div className='flex justify-between sm:flex-row flex-col'>
                <WithdrawalTable />
                <DepositTable />
            </div>

            <SlipsTable />

            <div className='text-white flex flex-col mt-5'>
                <div className='flex flex-row'>
                    <svg
                        className='w-4 h-4 mt-1 mr-1 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
                        id="Layer_1"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill='currentColor'>
                        <g>
                            <path d="M423.4,358c-43.8-6.7-47.1-13.1-47.1-13.1c9-54.1-18.9-122.6-64.6-159.7c-60.7-49.3-153.1-13.5-225-88.5   c-16.8-17.5-7,196.3,83,277.3c65.8,59.2,143.3,41,164.6,31.3c19.3-8.8,32.8-24.9,32.8-24.9c35.1,10.8,52.5,10.2,52.5,10.2   C431.9,392.1,438.1,360.2,423.4,358z M343.2,361.6c-115.3-34.1-202-153.8-202-153.8s76.1,89.8,210.2,133.5   C351.6,348.1,347.6,357.8,343.2,361.6z" />
                        </g>
                    </svg>
                    - は体験入店キャスト、
                </div>
                <div className='flex flex-row'>
                    <svg
                        viewBox="0 0 448 512"
                        className='w-4 h-4 mt-1 mr-1 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
                        fill='currentColor'
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z" />
                    </svg>
                    - は派遣キャストとして登録されています。
                </div>
            </div>
            <CastReportTable />
            <StaffReportTable />
        </div>
    )
}


export default DailySales;