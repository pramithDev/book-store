import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const Navbar = () => {
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
                <div className="flex items-center gap-4">
                    <HiOutlineUser className="size-6"/>
                    <button className="hidden sm:block">
                        <HiOutlineHeart className="size-6"/>
                    </button>
                    <Link to="/cart" className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm">
                        <HiOutlineShoppingCart className="size-6" />
                        <span>0</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
