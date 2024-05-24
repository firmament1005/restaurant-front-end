import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <nav className="fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" className="p-2 mr-3 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <svg id="toggleSidebarMobileHamburger" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                <svg id="toggleSidebarMobileClose" className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                            <select id="large" className="flex cursor-pointer items-center sm:mx-10 h-10 px-2 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="store_1">Store 1</option>
                                <option value="store_2">Store 2</option>
                                <option value="store_3">Store 3</option>
                            </select>
                        </div>
                        <div className="flex items-center">
                            <button type="button" data-dropdown-toggle="notification-dropdown" className="p-2 mr-3  text-white bg-blue-700 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:bg-blue-700 dark:hover:text-white dark:hover:bg-gray-700">
                                Add Friends
                            </button>
                            <button type="button" data-dropdown-toggle="notification-dropdown" className="p-2  text-white bg-blue-700 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:bg-blue-700 dark:hover:text-white dark:hover:bg-gray-700">
                                App Store
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header >
    )
}

export default Header;