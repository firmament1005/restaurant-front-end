import React from 'react';
import { Link } from 'react-router-dom';

const Table: React.FC = () => {
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
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                火
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                水
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                木
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                金
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                土
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                日
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                月
                            </th>

                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                火
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                水
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                木
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                金
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                土
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                日
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                月
                            </th>

                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                火
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                水
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                木
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                金
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                土
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                日
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                月
                            </th>

                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                火
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                水
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                木
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                金
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                土
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                日
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                月
                            </th>
                        </tr>
                        <tr className='border-b border-blue-950'>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                1
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                2
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                3
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                4
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                5
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                6
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                7
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                1
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                2
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                3
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                4
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                5
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                6
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                7
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                1
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                2
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                3
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                4
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                5
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                6
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                7
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                1
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                2
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                3
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                4
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                5
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                6
                            </th>
                            <th className="px-1 text-center font-bold text-sm p-2 border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                7
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 border-r border-gray-400 font-medium whitespace-nowrap dark:text-gray-400">
                                <Link to={"/home/cast"}>ろぜ</Link>
                            </td>
                            <td className="px-6 py-4 border-r border-gray-400 font-medium whitespace-nowrap dark:text-green-500">
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
                            <td className="px-6 py-4 border-r border-gray-400 font-medium whitespace-nowrap dark:text-green-500">
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
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;