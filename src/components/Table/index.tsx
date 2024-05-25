import React from 'react';


interface TableDataProps {
    header: string[],
    data: string[][],
    style: string
}

const Table: React.FC<TableDataProps> = ({ header, data, style }) => {

    return (
        <div className={`relative basis-1/4 overflow-x-auto border dark:border-gray-700 rounded-lg ${style}`}>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {header.map((heading, index) => (
                            <th key={index} colSpan={data.length - header.length} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                                {heading}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;