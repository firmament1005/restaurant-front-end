import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import Table from '../../components/Table';


const getMainChartOptions = (isDarkMode: boolean) => {
    const mainChartColors = isDarkMode
        ? {
            borderColor: '#374151',
            labelColor: '#9CA3AF',
            opacityFrom: 0,
            opacityTo: 0.15,
        }
        : {
            borderColor: '#F3F4F6',
            labelColor: '#6B7280',
            opacityFrom: 0.45,
            opacityTo: 0,
        };

    return {
        chart: {
            height: 420,
            type: 'area' as const,
            fontFamily: 'Inter, sans-serif',
            foreColor: mainChartColors.labelColor,
            toolbar: {
                show: false,
            },
        },
        fill: {
            type: 'gradient' as const,
            gradient: {
                enabled: true,
                opacityFrom: mainChartColors.opacityFrom,
                opacityTo: mainChartColors.opacityTo,
            },
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            style: {
                fontSize: '14px',
                fontFamily: 'Inter, sans-serif',
            },
        },
        grid: {
            show: true,
            borderColor: mainChartColors.borderColor,
            strokeDashArray: 1,
            padding: {
                left: 35,
                bottom: 15,
            },
        },
        series: [
            {
                name: 'Earnings',
                data: [6356, 6218, 6156, 6526, 6356, 6256, 6056],
                color: '#1A56DB',
            },
            {
                name: 'Payment',
                data: [6556, 6725, 6424, 6356, 6586, 6956, 6616],
                color: '#FDBA8C',
            },
            {
                name: 'Personnel costs',
                data: [6456, 6115, 5424, 6356, 7586, 6956, 3616],
                color: '#ADBB7C',
            },
        ],
        markers: {
            size: 5,
            strokeColors: '#ffffff',
            hover: {
                size: undefined,
                sizeOffset: 3,
            },
        },
        xaxis: {
            categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
            labels: {
                style: {
                    colors: [mainChartColors.labelColor],
                    fontSize: '14px',
                    fontWeight: 500,
                },
            },
            axisBorder: {
                color: mainChartColors.borderColor,
            },
            axisTicks: {
                color: mainChartColors.borderColor,
            },
            crosshairs: {
                show: true,
                position: 'back',
                stroke: {
                    color: mainChartColors.borderColor,
                    width: 1,
                    dashArray: 10,
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: [mainChartColors.labelColor],
                    fontSize: '14px',
                    fontWeight: 500,
                },
                formatter: function (value: number) {
                    return '$' + value;
                },
            },
        },
        legend: {
            fontSize: '14px',
            fontWeight: 500,
            fontFamily: 'Inter, sans-serif',
            labels: {
                colors: [mainChartColors.labelColor],
            },
            itemMargin: {
                horizontal: 10,
            },
        },
        responsive: [
            {
                breakpoint: 1024,
                options: {
                    xaxis: {
                        labels: {
                            show: false,
                        },
                    },
                },
            },
        ],
    };
};

const TableOne = {
    header: [
        "店舗状況[月間]", ""
    ],
    data: [
        ['来店人数', "253人"],
        ['来店組数', '206組'],
        ['客単価', '￥11,687'],
        ['組単価', '￥14,354'],
        ['女子本計', '￥2,027,799'],
        ['タグ対象額', '￥847,100']
    ]
}

const TableTwo = {
    header: [
        "売上累計[月間]", ""
    ],
    data: [
        [" ", '￥2,956,900'],
        ['現金', '￥1,558,500'],
        ['売掛', '¥0'],
        ['カード', '￥1,398,400'],
    ]
}

const TableThree = {
    header: [
        "経費累計　[月間]", ""
    ],
    data: [
        ["", "￥1,058,398"],
        ["人件費-女子", "￥868,959"],
        ["人件費-男子", "¥0"],
        ["諸経費", "￥189,439"]
    ]
}

const TableFour = {
    header: [
        "入金累計　[月間]", ""
    ],
    data: [
        ["", "¥0"]
    ]
}

const TableFive = {
    header: [
        "店舗状況 2024年5月24日", ""
    ],
    data: [
        ["来店人数", "0人"],
        ["来店組数", "0組"],
        ["客単価", "¥0"],
        ["組単価", "¥0"],
        ["女子本計", "¥0"],
        ["タグ対象額", "¥0"]
    ]
}

const TableSix = {
    header: [
        "売上 2024年5月24日", ""
    ],
    data: [
        ["", "¥0"],
        ["現金", "¥0"],
        ["売掛", "¥0"],
        ["カード", "¥0"]
    ]
}

const TableSeven = {
    header: [
        "経費 2024年5月24日", ""
    ],
    data: [
        ["", "¥0"],
        ["人件費-女子", "¥0"],
        ["人件費-男子", "¥0"],
        ["諸経費", "¥0"]
    ]
}

const TableEight = {
    header: [
        "入金 2024年5月24日", ""
    ],
    data: [
        ["", "¥0"],
    ]
}

const Summary: React.FC = () => {

    useEffect(() => {
        const chartElement = document.getElementById('main-chart');
        if (chartElement) {
            const chart = new ApexCharts(chartElement, getMainChartOptions(true));
            chart.render();

            const handleDarkModeToggle = () => {
                chart.updateOptions(getMainChartOptions(document.documentElement.classList.contains('dark')));
            };

            document.addEventListener('dark-mode', handleDarkModeToggle);

            return () => {
                document.removeEventListener('dark-mode', handleDarkModeToggle);
                chart.destroy();
            };
        }
    },);

    return (
        <div className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900 p-4">
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex-shrink-0">
                        <span className="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">$45,385</span>
                        <h3 className="text-base font-light text-gray-500 dark:text-gray-400">Sales this week</h3>
                    </div>
                    <div className="bg-gray-50 relative pr-1 border border-gray-300 rounded-lg flex flex-row dark:bg-gray-700">
                        <svg className="w-10 h-10 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z"></path>
                            <path clipRule="evenodd" fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"></path>
                        </svg>
                        <div className='flex flex-row'>
                            <select className="bg-gray-50 focus:outline-none border-0 text-gray-900 text-sm block w-full  p-2.5 dark:bg-gray-700 dark:text-white">
                                <option className='text-center' value="store_1">2020 年 </option>
                                <option className='text-center' value="store_1">2021 年 </option>
                                <option className='text-center' value="store_1">2022 年 </option>
                                <option className='text-center' value="store_1">2023 年 </option>
                                <option className='text-center' value="store_1">2024 年 </option>
                                <option className='text-center' value="store_1">2025 年 </option>
                                <option className='text-center' value="store_1">2026 年 </option>
                            </select>
                            <select className="bg-gray-50 focus:outline-none border-0 text-gray-900 text-sm block w-full pl-3 p-2.5 dark:bg-gray-700 dark:text-white">
                                <option className='text-center' value="store_1">1 月</option>
                                <option className='text-center' value="store_2">2 月</option>
                                <option className='text-center' value="store_3">3 月</option>
                                <option className='text-center' value="store_3">4 月</option>
                                <option className='text-center' value="store_3">5 月</option>
                                <option className='text-center' value="store_3">6 月</option>
                                <option className='text-center' value="store_3">7 月</option>
                                <option className='text-center' value="store_3">8 月</option>
                                <option className='text-center' value="store_3">9 月</option>
                                <option className='text-center' value="store_3">10 月</option>
                                <option className='text-center' value="store_3">11 月</option>
                                <option className='text-center' value="store_3">12 月</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div id="main-chart"></div>
            </div>
            <div className='flex flex-col'>
                <div className='flex sm:flex-row flex-col justify-between'>
                    <Table header={TableOne.header} data={TableOne.data} style="basis-[24%] mt-5 " />
                    <Table header={TableTwo.header} data={TableTwo.data} style='basis-[24%] mt-5 ' />
                    <Table header={TableThree.header} data={TableThree.data} style='basis-[24%] mt-5 ' />
                    <Table header={TableFour.header} data={TableFour.data} style='basis-[24%] mt-5 ' />
                </div>
                <div className='flex sm:flex-row flex-col mt-5 justify-between'>
                    <Table header={TableFive.header} data={TableFive.data} style='basis-[24%] mt-5 ' />
                    <Table header={TableSix.header} data={TableSix.data} style='basis-[24%] mt-5 ' />
                    <Table header={TableSeven.header} data={TableSeven.data} style='basis-[24%] mt-5 ' />
                    <Table header={TableEight.header} data={TableEight.data} style='basis-[24%] mt-5 ' />
                </div>
            </div>

        </div>

    )
}

export default Summary;