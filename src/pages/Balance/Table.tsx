import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMaxDate } from '../../utils/Date';

interface SelectedDate {
    Year: number,
    Month: number
}

const BalanceTable: React.FC<SelectedDate> = ({ Year, Month }) => {

    const [daysCount, setMaxDate] = useState(0);

    useEffect(() => {
        const date = new Date();
        setMaxDate(getMaxDate({ Year: Year != 0 ? Year : date.getFullYear(), Month: Month != 0 ? Month : date.getMonth() + 1 }));
    }, [Year, Month]);

    return (
        <div className='mt-10'>
            <div className='text-white'>※日付をクリックすると収支明細(日次)に遷移します </div>
            <div className='overflow-auto rounded-lg p-1 border dark:border-gray-700'>
                <table className="w-full text-sm text-gray-500 dark:text-gray-400 border dark:border-gray-700">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='border-b border-blue-950'>
                            <th colSpan={2} rowSpan={2} className="px-6 py-3 font-bold text-center border-r-2 border-b border-blue-950 text-lg text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                2024年 4月
                            </th>
                            <th colSpan={4} className="px-6 py-3 font-bold text-center border-r-2 text-lg border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                売上
                            </th>
                            <th colSpan={2} className="px-6 py-3 font-bold text-center border-r-2 text-lg border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                女子売上
                            </th>
                            <th colSpan={9} className="px-6 py-3 font-bold text-center border-r-2 text-lg border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                経費
                            </th>
                            <th rowSpan={2} className="px-6 py-3 text-center font-bold text-lg text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                粗利
                            </th>
                        </tr>
                        <tr className='border-b border-blue-950'>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                現金
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                売掛
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                カード
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                売上計
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                オタク本計
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                本計
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                残り支給額
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                給率
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                男子日払
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                女子日払
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                ボーナス
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                マイナス
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                入金
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                出金
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                経費計
                            </th>
                        </tr>
                        <tr className='border-b border-blue-950'>
                            <th colSpan={2} className="px-6 py-3 font-medium  text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                合計
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                現金
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                売掛
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                カード
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                売上計
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                オタク本計
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                本計
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                残り支給額
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                給率
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                男子日払
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                女子日払
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                ボーナス
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                マイナス
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                入金
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                出金
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-r-2 border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                経費計
                            </th>
                            <th className="px-6 py-3 font-medium text-center border-b border-blue-950 text-xs text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                経費計
                            </th>
                        </tr>
                    </thead>

                    {daysCount !== 0 ? (
                        <tbody>
                            {Array.from({ length: daysCount }, (_, index) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4 border-r border-gray-400 font-medium whitespace-nowrap dark:text-gray-400">
                                        {index < 9 ? <Link to='#'>04/0{index + 1}</Link> : <Link to='#'>04/{index + 1}</Link>}
                                    </td>
                                    <td className="px-6 py-4 border-r border-gray-400 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        H
                                    </td>
                                    <td className="px-6 py-4 border-r border-gray-400 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        H
                                    </td>
                                    <td className="px-6 py-4 border-r border-gray-400 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        H
                                    </td>
                                    <td className="px-6 py-4 border-r border-gray-400 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        H
                                    </td>
                                    <td className="px-6 py-4 border-r border-gray-400 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        H
                                    </td>

                                    <td className="px-6 py-4 border-r border-gray-400 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        H
                                    </td>
                                    <td className="px-6 py-4 border-r border-gray-400 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        H
                                    </td>
                                    <td className="px-6 py-4 border-r border-gray-400 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        H
                                    </td>
                                    <td className="px-6 py-4 border-r border-gray-400 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        H
                                    </td>

                                    <td className="px-6 py-4 border-r border-gray-400 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        H
                                    </td>
                                    <td className="px-6 py-4 border-r border-gray-400 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        H
                                    </td>
                                    <td className="px-6 py-4 border-r border-gray-400 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        H
                                    </td>
                                    <td className="px-6 py-4 border-r border-gray-400 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        H
                                    </td>

                                    <td className="px-6 py-4 border-r border-gray-400 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        H
                                    </td>
                                    <td className="px-6 py-4 border-r border-gray-400 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        H
                                    </td>
                                    <td className="px-6 py-4 border-r border-gray-400 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        H
                                    </td>
                                    <td className="px-6 py-4 border-r border-gray-400 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        H
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    ) : (
                        <p>Loading...</p>
                    )}
                </table>
            </div>
        </div>
    )
}


export default BalanceTable;