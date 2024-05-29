import React from 'react';
import { Link } from 'react-router-dom';

const CastTable: React.FC = () => {
    return (
        <div className='mt-10'>
            <div className='overflow-auto rounded-lg p-1 border dark:border-gray-700'>
                <table className="w-full text-sm text-gray-500 dark:text-gray-400 border dark:border-gray-700">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='border-b border-blue-950'>
                            <th className="px-6 py-3 font-bold text-center border-r-2 border-b border-blue-950 text-sm text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                No
                            </th>
                            <th className="px-6 py-3 font-bold text-center border-r-2 border-b border-blue-950 text-sm text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                名前
                            </th>
                            <th className="px-6 py-3 text-center font-bold border-r-2 border-blue-950 text-sm text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                ポイ<br />ント
                            </th>
                            <th className="px-6 py-3 text-center font-bold border-r-2 border-blue-950 text-sm text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                残り<br />支給額
                            </th>
                            <th className="px-6 py-3 text-center font-bold border-r-2 border-blue-950 text-sm text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                オタ<br />ク本計
                            </th>
                            <th className="px-6 py-3 text-center font-bold border-r-2 border-blue-950 text-sm text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                本計
                            </th>
                            <th className="px-6 py-3 text-center font-bold border-r-2 border-blue-950 text-sm text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                給率(%)
                            </th>
                            <th className="px-6 py-3 text-center font-bold border-r-2 border-blue-950 text-sm text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                勤務<br />日数
                            </th>
                            <th className="px-6 py-3 font-bold text-center border-r-2 border-b border-blue-950 text-sm text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                時間<br />報酬
                            </th>
                            <th className="px-6 py-3 font-bold text-center border-r-2 border-b border-blue-950 text-sm text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                オタク<br />バック
                            </th>
                            <th className="px-6 py-3 font-bold text-center border-r-2 border-b border-blue-950 text-sm text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                押すな<br />！バック
                            </th>
                            <th className="px-6 py-3 font-bold text-center border-r-2 border-b border-blue-950 text-sm text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                ドリン<br />クバック
                            </th>
                            <th className="px-6 py-3 font-bold text-center border-r-2 border-b border-blue-950 text-sm text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                ボトル<br />バック
                            </th>
                            <th className="px-6 py-3 font-bold text-center border-r-2 border-b border-blue-950 text-sm text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                フード<br />バック
                            </th>
                            <th className="px-6 py-3 font-bold text-center border-r-2 border-b border-blue-950 text-sm text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                ボー<br />ナス
                            </th>
                            <th className="px-6 py-3 font-bold text-center border-r-2 border-b border-blue-950 text-sm text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                厚生費
                            </th>
                            <th className="px-6 py-3 font-bold text-center border-r-2 border-b border-blue-950 text-sm text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                日払
                            </th>
                            <th className="px-6 py-3 font-bold text-center border-r-2 border-b border-blue-950 text-sm text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                マイ<br />ナス
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 border-r border-gray-400 font-medium whitespace-nowrap dark:text-gray-400">
                                1
                            </td>
                            <td className="px-6 py-4 border-r border-gray-400 font-medium whitespace-nowrap dark:text-green-500">
                                <Link to={"/home/castdetail"}>ろぜ</Link>
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


export default CastTable;