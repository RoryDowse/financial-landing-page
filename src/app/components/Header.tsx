"use client";

import Link from "next/link";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { useState } from "react";


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };

    return (
        <header>
            {/* Company Name */}
            <h1>Empower Bank</h1>

            {/* Hamburger Menu Icon */}
            <div 
                className="lg:hidden"
                onClick={toggleMenu}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Mobile Menu */}
            {/* <nav
                className={`${menuOpen ? 'lg:block' : 'hidden'} block` }
            >
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">About</Link></li>
                    <li><Link href="/">Services</Link></li>
                    <li><Link href="/">Contact</Link></li>
                </ul>
            </nav> */}

            {/* Search Icon */}
            <div
                className="cursor-pointer"
                onClick={toggleSearch}
            >
                <FaSearch size={24} />
            </div>

            {/* Mobile Search */}
            {/* {searchOpen && (
                <div>
                    <input
                        type="text"
                        placeholder="Enter a keyword or topic"
                    />
                    <button><FaSearch size={24} /></button>
                </div>
            )} */}

            {/* Log In Button */}
            <Link href="/">Log In</Link>
        </header>
    );
}