import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
    const [dropdownVisibility, setDropdownVisibility] = useState({
        setting: false,
        history: false,
        others: false,
    });

    const handleDropDown = (item: string) => {
        setDropdownVisibility((prevState) => ({
            setting: item === 'setting' ? !prevState.setting : false,
            history: item === 'history' ? !prevState.history : false,
            others: item === 'others' ? !prevState.others : false,
        }));
    };

    return (
        <div>
            <aside
                id="sidebar"
                className="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 hidden w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width" aria-label="Sidebar">
                <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
                        <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                            <ul className="pb-2 space-y-2">
                                <li>
                                    <Link to="/home" className="summary flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                                        <svg
                                            className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                        </svg>
                                        <span className="ml-3" > まとめ</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/home/balance' className="balance flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" aria-controls="dropdown-layouts" data-collapse-toggle="dropdown-layouts">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                            className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                            fill='currentColor'>
                                            <path d="M3 17H5V11H3V17ZM7 17H9V7H7V17ZM11 17H13V13H11V17ZM15 17H17V9H15V17ZM19 17H21V5H19V17ZM2 19H22V21H2V19Z" />
                                        </svg>
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap" > 収支</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/home/cast' className="cast flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" aria-controls="dropdown-crud" data-collapse-toggle="dropdown-crud">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            fill='currentColor'
                                            clipRule="evenodd"
                                            viewBox="0 0 512 501.451"
                                            className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                                            <path d="M90.396 260.923c38.16-40.465 18.438-130.599 36.706-183.524 25.655-74.227 120.495-99.594 173.333-56.158 41.432-4.412 83.182 16.956 92.184 80.835 7.36 52.248 2.867 123.098 28.979 163.408-27.902 26.737-71.407 29.008-107.856 30.963l1.118 8.425c1.82 13.68 1.801 16.655 12.249 28.273C376.651 388.21 512 338.219 512 494.87c0 3.625-2.959 6.581-6.592 6.581H6.592c-3.636 0-6.592-2.956-6.592-6.581 0-168.597 143.337-87.788 185.168-161.699 6.943-12.261 6.676-15.628 6.075-28.89l-.327-7.199c-39.105-1.85-73.255-3.68-100.52-36.159z" />
                                        </svg>
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap" > キャスト</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 512 500.458"
                                            className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                                            <path d="M187.095 304.534c-7.873-8.107-17.767-21.504-19.131-36.46l-1.513.029c-3.485-.047-6.854-.847-10.006-2.645-5.042-2.873-8.592-7.795-10.989-13.352-5.073-11.655-9.096-42.333 3.675-51.102l-2.391-1.59-.269-3.395c-.492-6.174-.617-13.644-.743-21.486-.46-28.843-1.045-63.782-24.233-70.789l-9.95-3.009 6.55-8.111c18.744-23.145 38.319-43.397 58.061-58.941 22.335-17.581 45.033-29.285 67.245-32.67 22.832-3.461 44.958 1.782 65.393 18.299 6.03 4.878 11.888 10.733 17.536 17.599 21.805 2.112 39.623 13.853 52.355 30.608 7.596 10.008 13.359 21.838 17.034 34.411 3.662 12.53 5.256 25.861 4.579 38.987-1.236 23.512-9.833 46.474-27.162 63.218 3.047.112 5.923.813 8.461 2.17 9.665 5.178 9.979 16.404 7.436 25.829-2.509 7.873-5.701 17.008-8.715 24.677-3.651 10.364-9.002 12.296-19.337 11.18-.337 16.435-11.73 30.04-21.566 39.16-3.704 3.434-7.954 6.495-12.617 9.188C363.564 396.773 512 324.404 512 493.877c0 3.625-2.959 6.581-6.592 6.581H6.592c-3.636 0-6.592-2.956-6.592-6.581 0-179.418 172.327-76.379 201.907-177.944-5.601-3.267-10.607-7.068-14.812-11.399z" />
                                        </svg>
                                        <span className="ml-3" > スタッフ</span>
                                    </Link>
                                </li>
                                <li>
                                    <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            viewBox="0 0 122.88 105.283"
                                            fill='currentColor'
                                            className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"><g>
                                                <path fillRule="evenodd" d="M64.534,2.334l7.463,0.472c0.513-0.035,1.034-0.063,1.567-0.082L120.7,54.051 c3.183,3.465,2.819,8.945-0.69,12.076l-41.5,37c-3.037,2.709-7.527,2.838-10.707,0.541l42.466-37.861 c3.74-3.336,4.128-9.18,0.736-12.871L64.534,2.334L64.534,2.334z M53.067,3.185l45.534,49.581 c3.074,3.348,2.723,8.643-0.667,11.666l-40.089,35.744c-3.387,3.02-8.645,2.719-11.666-0.67L3.422,51.541l0.082-1.414L0,0 l51.549,3.264C52.045,3.23,52.551,3.203,53.067,3.185L53.067,3.185z M20.058,9.77c5.104,0.112,9.154,4.345,9.042,9.45 s-4.345,9.155-9.45,9.042c-5.105-0.112-9.154-4.345-9.042-9.45C10.72,13.707,14.953,9.657,20.058,9.77L20.058,9.77z M28.251,44.743 l29.426,32.062l-5.865,5.385L22.386,50.125L28.251,44.743L28.251,44.743z M41.265,33.13l29.429,32.061l-5.867,5.383L35.399,38.513 L41.265,33.13L41.265,33.13z M53.091,22.061L82.52,54.125l-5.867,5.383L47.226,27.447L53.091,22.061L53.091,22.061z" /></g></svg>
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap" > タグ</span>
                                    </button>
                                </li >
                                <li>
                                    <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                            x="0px" y="0px" viewBox="0 0 122.88 92.65"
                                            fill='currentColor'
                                            className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" ><g>
                                                <path d="M0,39.37h24.83v44.18H0V39.37L0,39.37z M81.73,0c12.2,0,22.11,9.89,22.11,22.11c0,12.2-9.89,22.11-22.11,22.11 c-12.2,0-22.11-9.89-22.11-22.11C59.63,9.91,69.52,0,81.73,0L81.73,0z M84.34,27.57c0-0.83-0.2-1.48-0.61-1.95 c-0.41-0.47-1.13-0.92-2.16-1.33c-1.02-0.42-1.97-0.84-2.84-1.27c-0.87-0.43-1.62-0.93-2.25-1.5c-0.63-0.56-1.11-1.22-1.45-1.96 c-0.33-0.74-0.5-1.64-0.5-2.7c0-1.77,0.6-3.23,1.79-4.37c1.19-1.15,2.78-1.82,4.77-2V8.1h2.5v2.44c1.91,0.28,3.42,1.07,4.51,2.36 c1.09,1.29,1.65,2.93,1.65,4.92h-5.31c0-1.09-0.21-1.92-0.63-2.51c-0.42-0.58-1.01-0.88-1.79-0.88c-0.69,0-1.23,0.22-1.61,0.65 c-0.38,0.43-0.57,1.03-0.57,1.8c0,0.78,0.22,1.39,0.66,1.84c0.44,0.46,1.15,0.89,2.12,1.31c0.98,0.41,1.89,0.84,2.76,1.29 c0.86,0.45,1.61,0.95,2.24,1.51c0.63,0.57,1.12,1.23,1.47,1.98c0.36,0.75,0.54,1.66,0.54,2.71c0,1.79-0.57,3.25-1.7,4.38 c-1.14,1.13-2.68,1.79-4.64,1.98v2.22h-2.49v-2.24c-2.28-0.24-4.04-1.02-5.25-2.35c-1.22-1.32-1.83-3.07-1.83-5.24H79 c0,1.2,0.26,2.1,0.79,2.73c0.52,0.62,1.28,0.93,2.25,0.93c0.71,0,1.27-0.21,1.68-0.64C84.13,28.89,84.34,28.3,84.34,27.57 L84.34,27.57L84.34,27.57z M29.83,79.84V42.91h16.61c7.04,1.26,14.08,5.08,21.12,9.51h12.9c5.84,0.35,8.9,6.27,3.22,10.16 c-4.52,3.32-10.49,3.13-16.61,2.58c-4.22-0.21-4.4,5.46,0,5.48c1.53,0.12,3.19-0.24,4.64-0.24c7.64-0.01,13.92-1.47,17.77-7.5 l1.93-4.51l19.19-9.51c9.6-3.16,16.42,6.88,9.35,13.87c-13.9,10.11-28.15,18.43-42.73,25.15c-10.59,6.44-21.18,6.22-31.76,0 L29.83,79.84L29.83,79.84z" /></g>
                                        </svg>
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap" > 現金管理</span>
                                    </button>
                                </li >
                                <li>
                                    <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 122.88 119.86"
                                            fill='currentColor'
                                            className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" >
                                            <path d="M20.72,72a3,3,0,0,1-2.84-3.1,3,3,0,0,1,2.84-3.1H57.47a3,3,0,0,1,2.84,3.1A3,3,0,0,1,57.47,72ZM83.08,95.75c-1-1.53-2.77-3.62-2.77-5.42a2.92,2.92,0,0,1,1.94-2.64c-.09-1.51-.15-3.06-.15-4.59,0-.9,0-1.82.05-2.72A6.52,6.52,0,0,1,82.46,79a9.7,9.7,0,0,1,4.32-5.48,12.28,12.28,0,0,1,2.34-1.12c1.48-.54.76-2.88,2.39-2.91,3.79-.1,10,3.22,12.47,5.86a8.84,8.84,0,0,1,2.49,5.93L106.32,88a2.17,2.17,0,0,1,1.59,1.37c.52,2.1-1.66,4.71-2.67,6.38s-4.5,5.74-4.51,5.78a1.39,1.39,0,0,0,.32.77c5.54,7.62,21.83,1.74,21.83,16.89H65.33c0-15.16,16.29-9.27,21.82-16.89a1.68,1.68,0,0,0,.4-.79c0-.1-4.1-5.12-4.47-5.71Zm8-76.89h10.18A7.16,7.16,0,0,1,106.39,21a7.26,7.26,0,0,1,2.13,5.13V61.9l-6.27-2.46V26.13a1,1,0,0,0-1-1H91V57.88l-6.24,2.46V7.27a1,1,0,0,0-1-1H7.24a1,1,0,0,0-1,1V93.72a1,1,0,0,0,1,1H64.42L62,101H23.66v11.6a1,1,0,0,0,1,1H56.37l-2.46,6.24H24.73a7.31,7.31,0,0,1-7.27-7.28V101H7.27A7.31,7.31,0,0,1,0,93.72V7.27A7.16,7.16,0,0,1,2.14,2.14,7.23,7.23,0,0,1,7.27,0H83.79a7.18,7.18,0,0,1,5.14,2.14,7.27,7.27,0,0,1,2.14,5.13V18.86Zm-70.38,10a3,3,0,0,1-2.85-3.1,3,3,0,0,1,2.85-3.1H69.77a3,3,0,0,1,2.84,3.1,3,3,0,0,1-2.84,3.1Zm0,21.57a3,3,0,0,1-2.85-3.1,3,3,0,0,1,2.85-3.1H69.77a3,3,0,0,1,2.84,3.1,3,3,0,0,1-2.84,3.1Z" />
                                        </svg>
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap" > 日報登録</span>
                                    </button>
                                </li >
                            </ul >
                            <div className="pt-2 space-y-2">
                                <button onClick={() => handleDropDown('setting')} className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                                    <svg className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M8.34 1.804A1 1 0 019.32 1h1.36a1 1 0 01.98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 011.262.125l.962.962a1 1 0 01.125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.294a1 1 0 01.804.98v1.361a1 1 0 01-.804.98l-1.473.295a6.95 6.95 0 01-.587 1.416l.834 1.25a1 1 0 01-.125 1.262l-.962.962a1 1 0 01-1.262.125l-1.25-.834a6.953 6.953 0 01-1.416.587l-.294 1.473a1 1 0 01-.98.804H9.32a1 1 0 01-.98-.804l-.295-1.473a6.957 6.957 0 01-1.416-.587l-1.25.834a1 1 0 01-1.262-.125l-.962-.962a1 1 0 01-.125-1.262l.834-1.25a6.957 6.957 0 01-.587-1.416l-1.473-.294A1 1 0 011 10.68V9.32a1 1 0 01.804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 01.125-1.262l.962-.962A1 1 0 015.38 3.03l1.25.834a6.957 6.957 0 011.416-.587l.294-1.473zM13 10a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap" > 設定 </span>
                                    <svg className={`${dropdownVisibility.setting ? '' : 'hidden'} size-6 text-write group-hover:text-write dark:text-neutral-400`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                                    <svg className={`${dropdownVisibility.setting ? 'hidden' : ''} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                                <ul id="dropdown-auth" className={`${dropdownVisibility.setting ? '' : 'hidden'} transition-[height] duration-700 py-2 space-y-2 transition delay-150`}>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-base text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                                            キャスト設定
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-base text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                                            スタッフ設定
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-base text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                                            入出金項目
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-base text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                                            給与項目
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                                            店舗設定
                                        </a>
                                    </li>
                                </ul>
                                <button onClick={() => handleDropDown('history')} className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                                        <path fillRule="evenodd" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm.5-13a.5.5 0 00-1 0v6.25l4.75 2.75a.5.5 0 00.5-.86L12.5 12.4V7z" clipRule="evenodd" />
                                    </svg>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap" > 履歴 </span>
                                    <svg className={`${dropdownVisibility.history ? '' : 'hidden'} size-6 text-write group-hover:text-write dark:text-neutral-400`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                                    <svg className={`${dropdownVisibility.history ? 'hidden' : ''} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                                <ul id="dropdown-auth" className={`${dropdownVisibility.history ? '' : 'hidden'} transition-[height] duration-700 py-2 space-y-2`}>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-base text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                                            メモ一覧
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-base text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                                            入出金履歴
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-base text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                                            印刷履歴
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-base text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                                            削除履歴
                                        </a>
                                    </li>
                                </ul>
                                <button onClick={() => handleDropDown('others')} className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M19.14 12.94l1.45-.83a2 2 0 00.25-3.37l-1.5-.87a1 1 0 01-.45-.95v-1.75a2 2 0 00-1.59-1.96l-1.8-.3a1 1 0 01-.78-.78l-.3-1.8a2 2 0 00-1.96-1.59h-1.75a1 1 0 01-.95-.45l-.87-1.5a2 2 0 00-3.37-.25l-.83 1.45a1 1 0 01-.95.45h-1.75a2 2 0 00-1.96 1.59l-.3 1.8a1 1 0 01-.78.78l-1.8.3a2 2 0 00-1.59 1.96v1.75a1 1 0 01-.45.95l-1.5.87a2 2 0 00-.25 3.37l1.45.83a1 1 0 01.45.95v1.75a2 2 0 001.59 1.96l1.8.3a1 1 0 01.78.78l.3 1.8a2 2 0 001.96 1.59h1.75a1 1 0 01.95.45l.87 1.5a2 2 0 003.37.25l.83-1.45a1 1 0 01.95-.45h1.75a2 2 0 001.96-1.59l.3-1.8a1 1 0 01.78-.78l1.8-.3a2 2 0 001.59-1.96v-1.75a1 1 0 01.45-.95zm-7.14 2.06a5 5 0 110-10 5 5 0 010 10z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap" > その他 </span>
                                    <svg className={`${dropdownVisibility.others ? '' : 'hidden'} size-6 text-write group-hover:text-write dark:text-neutral-400`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                                    <svg className={`${dropdownVisibility.others ? 'hidden' : ''} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                                <ul id="dropdown-auth" className={`${dropdownVisibility.others ? '' : 'hidden'} transition-[height] duration-700 py-2 space-y-2`}>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-base text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                                            伝票修正
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div >
                    </div >
                </div >
            </aside >
            <div className="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90" id="sidebarBackdrop"></div>
        </div>
    )
}


export default Nav;