import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMaxDate, daysOfWeek } from '../../utils/Date';

interface TableProps {
    Year: number,
    Month: number
}

const Table: React.FC<TableProps> = ({ Year, Month }) => {

    const [maxDate, setMaxDate] = useState(0);
    const [firstDayofWeek, setFirstDayofWeek] = useState(new Date(Year, Month - 1, 0).getDay());

    useEffect(() => {
        const currentDate = new Date();
        setFirstDayofWeek(new Date(Year, Month - 1, 0).getDay());
        setMaxDate(getMaxDate({ Year: Year == 0 ? currentDate.getFullYear() : Year, Month: Month == 0 ? currentDate.getMonth() + 1 : Month }));
    }, [Year, Month])

    return (
        <div className='mt-10'>
            <div className='overflow-auto rounded-lg p-1 border dark:border-gray-700'>
                <table className="w-[3000px] text-sm text-gray-500 dark:text-gray-400 border dark:border-gray-700 overflow-auto-x overflow-x-scroll w-[2500px]">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='border-b border-blue-950'>
                            <th rowSpan={2} className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                NO
                            </th>
                            <th rowSpan={2} className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                メニュー
                            </th>
                            <th rowSpan={2} className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                合計
                            </th>
                            {maxDate !== 0 ? (
                                Array.from({ length: maxDate }, (_, index) => (
                                    <th
                                        className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400"
                                    >
                                        {daysOfWeek[(index + firstDayofWeek + 1) % 7]}
                                    </th>
                                ))
                            ) : (
                                <p></p>
                            )}
                        </tr>
                        {maxDate !== 0 ? (
                            <tr className='border-b border-blue-950'>
                                {Array.from({ length: maxDate }, (_, index) => (
                                    <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                        {index + 1}
                                    </th>
                                ))}
                            </tr>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 border-r border-gray-400 font-medium whitespace-nowrap dark:text-gray-400">
                                1
                            </td>
                            <td className="px-6 py-4 border-r border-gray-400 font-medium whitespace-nowrap dark:text-green-500">
                                散歩
                            </td>
                            <td className="px-6 py-4 border-r border-gray-400 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                27
                            </td>
                            {maxDate !== 0 ? (
                                Array.from({ length: maxDate }, (_, index) => (
                                    <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                        0
                                    </th>
                                ))
                            ) : (
                                <p>Loading...</p>
                            )}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;