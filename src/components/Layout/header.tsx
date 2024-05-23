import React, { useState } from 'react';
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

const Header: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className='flex flex-row justify-between p-2 border-b-2 bg-gray-100 bg-gradient-to-r from-blue-500 to-purple-600 shadow-md'>

            <select id="large" className="flex items-center sm:mx-10 h-10 px-2 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Select Store</option>
                <option value="store_1">Store 1</option>
                <option value="store_2">Store 2</option>
                <option value="store_3">Store 3</option>
            </select>

            <nav className=" sm:flex sm:mr-10 mt-2 justify-between items-center gap-4 font-semibold">

                <button
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 text-center">
                    Add Friend
                </button>

                <button
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 text-center">
                    App Store
                </button>

                <button
                    className='sm:hidden'
                    onClick={() => setShowMenu(!showMenu)}>
                    {showMenu ? <GrClose /> : <GiHamburgerMenu />}
                </button>

            </nav>
        </header>
    )
}

export default Header;