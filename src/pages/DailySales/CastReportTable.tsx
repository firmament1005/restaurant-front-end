import React from 'react';


const CastReportTable: React.FC = () => {
    return (
        <div>
            <div className='overflow-auto w-full rounded-lg p-1 border dark:border-gray-700'>
                <table className="text-sm w-full text-gray-500 dark:text-gray-400 border dark:border-gray-700 overflow-auto-x overflow-x-scroll">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='border-b border-blue-950'>
                            <th colSpan={4} className="px-1 text-left text-lg font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                勤怠報告 - 2024年5月1日(水)
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CastReportTable;