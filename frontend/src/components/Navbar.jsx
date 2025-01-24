import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi2";

import avatarImg from "../assets/avatar.png";
import { useState } from "react";

const navigation = [
    {
        name: 'Dashboard',
        href: '/dashboard',
    },
    {
        name: 'Orders',
        href: '/orders',
    },
    {
        name: 'Cart Page',
        href: '/cart',
    },
    {
        name: 'Check Out',
        href: '/checkout',
    },
]

const Navbar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    // console.log(isDropdownOpen);

    const currentUser = true;
    return (
        <header className="max-w-screen-2xl mx-auto px-4 py-6">
            <nav className="flex justify-between items-center">
                {/* left Side */}
                <div className="flex items-center md:gap-16 gap-4">
                    <Link to="/">
                        <HiMiniBars3CenterLeft className="size-6"/>
                    </Link>

                    {/* Search Input */}
                    <div className="relative sm:w-72 w-40 space-x-2">
                        <IoSearchOutline className="size-4 absolute inline-block left-4 inset-y-2" />
                        <input type="text" placeholder="Search Here" 
                            className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none" 
                        />
                    </div>
                </div>

                {/* Right Side */}
                <div className="relative flex items-center md:space-x-3 space-x-2">
                    <div>
                        {
                            currentUser ? <>
                            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                <img src={avatarImg} alt="User" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`} />
                            </button>
                            {/* show dropdown */}
                            {
                                isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                                        <ul className="py-2">
                                            {
                                                navigation.map((item, index) => (
                                                    <li key={index} onClick={() => setIsDropdownOpen(false)}>
                                                        <Link to={item.href} className="block py-2 px-4 text-sm hover:bg-gray-200">{item.name}</Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )
                            }
                            </> : <Link to="/login"><HiOutlineUser className="size-6"/></Link>
                        }
                    </div>
                    
                    <button className="hidden sm:block">
                        <HiOutlineHeart className="size-6"/>
                    </button>
                    <Link to="/cart" className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm">
                        <HiOutlineShoppingCart className="size-6" />
                        <span className="text-sm font-semibold sm:ml-1">0</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
