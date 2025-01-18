"use client";

import Link from "next/link";
import { FaBars, FaTimes, FaSearch, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

import { InfinityRewardsCard } from "@/app/models/CreditCard";


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
            {/* First Row */}
            <div>
                {/* Hamburger Menu Icon */}
                <div 
                    className="lg:hidden"
                    onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Company Name */}
                <h1>{InfinityRewardsCard.bankName}</h1>

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

                {/* Log In Button */}
                <Link href="/">Log In</Link>
            </div>

            { /* Mobile Search Row */ }
            <div>
             {searchOpen && (
                <div>
                    <input
                        type="text"
                        placeholder="Enter a keyword or topic"
                    />
                    <button><FaSearch size={24} /></button>
                </div>
            )}
            </div>

            { /* Second Row */ }
            <div>
                {/* Back Link */}
                <Link href="/"><FaArrowLeft />View All Cards</Link>
            </div>
        </header>
    );
}