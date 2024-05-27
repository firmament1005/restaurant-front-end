import React from 'react';
import { Link } from 'react-router-dom';


const SlipsTable: React.FC = () => {
    return (
        <div className='mt-10'>
            <div className='overflow-auto w-full rounded-lg p-1 border dark:border-gray-700'>
                <table className="text-sm w-full text-gray-500 dark:text-gray-400 border dark:border-gray-700 overflow-auto-x overflow-x-scroll">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='border-b border-blue-950'>
                            <th colSpan={19} className="px-1 text-left text-lg font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                伝票一覧 - 2024年5月1日(水)
                            </th>
                        </tr>
                        <tr className='border-b border-blue-950'>
                            <th rowSpan={3} className="px-1 text-center  text-sm font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                No
                            </th>
                            <th rowSpan={3} className="px-1 text-center  text-sm font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                修正
                            </th>
                            <th colSpan={6} className="px-1 text-center  text-sm font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                お客様情報
                            </th>
                            <th colSpan={6} className="px-1 text-center  text-sm font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >

                            </th>
                            <th rowSpan={3} className="px-1 text-center  text-sm font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                オタク小計
                            </th>
                            <th colSpan={4} className="px-1 text-center  text-sm font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                売上
                            </th>
                        </tr>
                        <tr className='border-b border-blue-950'>
                            <th rowSpan={2} className="px-1 text-center  text-sm font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                入店
                            </th>
                            <th rowSpan={2} className="px-1 text-center  text-sm font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                退店
                            </th>
                            <th rowSpan={2} className="px-1 text-center  text-sm font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                時間
                            </th>
                            <th rowSpan={2} className="px-1 text-center  text-sm font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                卓番号
                            </th>
                            <th rowSpan={2} className="px-1 text-center  text-sm font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                客数
                            </th>
                            <th rowSpan={2} className="px-1 text-center  text-sm font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                タグ
                            </th>
                            <th colSpan={2} className="px-1 text-center  text-sm font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                オタク
                            </th>
                            <th colSpan={2} className="px-1 text-center  text-sm font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                押すな！
                            </th>
                            <th colSpan={2} className="px-1 text-center  text-sm font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >

                            </th>
                            <th rowSpan={2} className="px-1 text-center  text-sm font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                現金
                            </th>
                            <th rowSpan={2} className="px-1 text-center  text-sm font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                カード
                            </th>
                            <th rowSpan={2} className="px-1 text-center  text-sm font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                売掛
                            </th>
                            <th rowSpan={2} className="px-1 text-center  text-sm font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                合計
                            </th>
                        </tr>
                        <tr className='border-b border-blue-950'>
                            <th className="px-1 text-center  text-sm font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                回数
                            </th>
                            <th className="px-1 text-center  text-sm font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                金額
                            </th>
                            <th className="px-1 text-center  text-sm font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                回数
                            </th>
                            <th className="px-1 text-center  text-sm font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                金額
                            </th>
                            <th className="px-1 text-center  text-sm font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                回数
                            </th>
                            <th className="px-1 text-center  text-sm font-bold border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                金額
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 border-r border-gray-400 font-medium text-gray-900 whitespace-nowrap dark:text-green-700">
                                <Link to={""}>1</Link>
                            </td>
                            <td className="px-6 py-4 border-r border-gray-400 font-medium text-gray-900 whitespace-nowrap dark:text-blue-700">
                                <Link to={""}>修正</Link>
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
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SlipsTable;