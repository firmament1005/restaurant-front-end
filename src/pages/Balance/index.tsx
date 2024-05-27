import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BalanceTable from './Table';


const Balance: React.FC = () => {
    const currentDate = new Date();
    const [selectedMonth, setSelectedMonth] = useState(0);
    const [selectedYear, setSelectedYear] = useState(0);

    useEffect(() => {
        setSelectedMonth(currentDate.getMonth() + 1);
        setSelectedYear(currentDate.getFullYear());
    }, [])

    const handleChangeMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMonth(parseInt(e.target.value));
    };

    const handleChangeYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(parseInt(e.target.value));
    };

    return (
        <div className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900 p-4">
            <div className="w-full mb-1">
                <div className="mb-4">
                    <nav className="flex mb-5" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                            <li className="inline-flex items-center">
                                <Link to="/home/balance" className="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
                                    <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                    収支明細(月次)
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                    <Link to="/home/salesitem" className="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-sky-500 dark:hover:text-white">
                                        売上商品集計
                                    </Link>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <div className='flex flex-row justify-between'>
                        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"> 収支</h1>
                        <div className='flex flex-row'>
                            <div className="bg-gray-50 relative pr-1 border border-gray-300 rounded-lg flex flex-row dark:bg-gray-700">
                                <svg className="w-10 h-10 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z"></path>
                                    <path clipRule="evenodd" fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"></path>
                                </svg>
                                <div className='flex flex-row'>
                                    <select
                                        className="bg-gray-50 focus:outline-none border-0 text-gray-900 text-sm block w-full w-auto dark:bg-gray-700 dark:text-white"
                                        onChange={handleChangeYear}
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
                                        className="bg-gray-50 focus:outline-none border-0 text-gray-900 text-sm block w-full w-auto pl-3 p-2.5 dark:bg-gray-700 dark:text-white"
                                        onChange={handleChangeMonth}
                                        value={selectedMonth}>
                                        <option className='text-center' value="1">1 月</option>
                                        <option className='text-center' value="2">2 月</option>
                                        <option className='text-center' value="3">3 月</option>
                                        <option className='text-center' value="4">4 月</option>
                                        <option className='text-center' value="5">5 月</option>
                                        <option className='text-center' value="6">6 月</option>
                                        <option className='text-center' value="7">7 月</option>
                                        <option className='text-center' value="8">8 月</option>
                                        <option className='text-center' value="9">9 月</option>
                                        <option className='text-center' value="10">10 月</option>
                                        <option className='text-center' value="11">11 月</option>
                                        <option className='text-center' value="12">12 月</option>
                                    </select>
                                </div>
                            </div>
                            <button className='text-white dark:bg-gray-700 ml-5 px-6 rounded-lg border border-gray-300'>Excel</button>
                            <button className='text-white dark:bg-gray-700 ml-5 px-4 rounded-lg border border-gray-300'>Excel(All)</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex  flex-col sm:flex-row flex-col justify-between'>
                <div className='text-white dark:bg-gray-700 border border border-gray-300 sm:w-[24%]'>
                    <div className='flex flex-row'>
                        <div className='text-white font-bold text-xl pl-3 dark:bg-zinc-800 sm:w-[30%]'>
                            売上
                        </div>
                        <div className='text-white font-bold text-xl text-right pr-3 dark:bg-gray-700 sm:w-[70%]'>
                            ￥2,956,900
                        </div>
                    </div>
                </div>
                <div className='text-white dark:bg-gray-700 border border border-gray-300 sm:w-[24%]'>
                    <div className='flex flex-row'>
                        <div className='text-white font-bold text-xl pl-3 dark:bg-zinc-800 sm:w-[30%]'>
                            入金
                        </div>
                        <div className='text-white font-bold text-xl text-right pr-3 dark:bg-gray-700 sm:w-[70%]'>
                            --
                        </div>
                    </div>
                </div>
                <div className='text-white dark:bg-gray-700 border border border-gray-300 sm:w-[24%]'>
                    <div className='flex flex-row'>
                        <div className='text-white font-bold text-xl pl-3 dark:bg-zinc-800 sm:w-[30%]'>
                            経費
                        </div>
                        <div className='text-white font-bold text-xl text-right pr-3 dark:bg-gray-700 sm:w-[70%]'>
                            ￥1,058,398
                        </div>
                    </div>
                </div>
                <div className='text-white dark:bg-gray-700 border border border-gray-300 sm:w-[24%]'>
                    <div className='flex flex-row'>
                        <div className='text-white font-bold text-xl pl-3 dark:bg-zinc-800 sm:w-[30%]'>
                            粗利
                        </div>
                        <div className='text-white font-bold text-xl text-right pr-3 dark:bg-gray-700 sm:w-[70%]'>
                            ￥1,898,502
                        </div>
                    </div>
                </div>
            </div>
            <BalanceTable Year={selectedYear == 0 ? currentDate.getFullYear() : selectedYear} Month={selectedMonth == 0 ? currentDate.getMonth() + 1 : selectedMonth} />
        </div >
    )
}

export default Balance;