import React from 'react';
import { Link } from 'react-router-dom';

const SalesCastTable: React.FC = () => {
    return (
        <div className='mt-10'>
            <div className='overflow-auto rounded-lg p-1 border dark:border-gray-700'>
                <table className="w-full w-auto text-sm text-gray-500 dark:text-gray-400 border dark:border-gray-700 overflow-auto-x overflow-x-scroll w-[2500px]">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='border-b border-blue-950'>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                対象
                            </th>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                散歩
                            </th>
                            <th className="px-1 text-center border-r-2 border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                キャス<br />トドリンクL
                            </th>
                            <th className="px-1 text-center border-r-2 border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                ソフドリ
                            </th>
                            <th className="px-1 text-center border-r-2 border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                チェキ<br />落書き有り
                            </th>
                            <th className="px-1 text-center border-r-2 border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                【遠隔】<br />キャス<br />ドリL
                            </th>
                            <th className="px-1 text-center border-r-2 border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                【遠隔】<br />ショット
                            </th>
                            <th className="px-1 text-center border-r-2 border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                【遠隔】<br />キャス<br />トフード
                            </th>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                【遠隔】<br />キャス<br />ドリS
                            </th>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                【遠隔】<br />チェキ
                            </th>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                キャス<br />トドリンクS
                            </th>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                アルコ<br />ール
                            </th>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                キャス<br />トフード
                            </th>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                フード<br />500
                            </th>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                フード<br />800
                            </th>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                フード<br />1000
                            </th>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                持ち込<br />み料
                            </th>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                シャメイ
                            </th>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                オムラ<br />イス
                            </th>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                シャンメリ<br />ーEX ロゼ
                            </th>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                シャンメリ<br />ーEX ホワイト
                            </th>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                金箔しお<br />シャンメリー
                            </th>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                キャス<br />トショット
                            </th>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                オタク<br />ショット
                            </th>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                1分撮影
                            </th>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                フード<br />300
                            </th>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                キャス<br />トフード<br />1300
                            </th>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                シャンメリー<br />EX<br />・ホワイト
                            </th>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                ガチャ<br />ガチャ
                            </th>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                ガチャ<br />ガチャ<br />オリシャン
                            </th>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                遠隔<br />ガチャ<br />ガチャ
                            </th>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                フィリコネ<br />ーム入り
                            </th>
                            <th className="px-1 text-center border-r-2 border-b border-blue-950 text-gray-500 uppercase tracking-wider dark:text-gray-400" >
                                1688 赤
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
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default SalesCastTable;