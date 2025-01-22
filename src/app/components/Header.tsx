"use client";

import Link from "next/link";
import { FaBars, FaTimes, FaSearch, FaArrowLeft, FaEllipsisV } from "react-icons/fa";
import { useState } from "react";

import { InfinityRewardsCard } from "@/app/models/CreditCard";
import allCardsLinks from "./AllCardsLinks";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [cardsOpen, setCardsOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };

    const toggleCards = () => {
        setCardsOpen(!cardsOpen);
    }

    return (
        <header className="bg-blue-900 text-white p-4">
            {/* First Row */}
            <div className="flex items-center justify-between">
                {/* Hamburger Menu Icon */}
                <div 
                    className="lg:hidden"
                    onClick={toggleMenu}>
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24}/>}
                </div>

                {/* Company Name */}
                <Link href="/">
                    <h1 className="text-2xl font-bold">{InfinityRewardsCard.bankName}</h1>
                </Link>

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
                    <FaSearch size={18} />
                </div>

                {/* Log In Button */}
                <button className="bg-blue-500 py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
                    <Link href="/">Log In</Link>
                </button>
            </div>

            { /* Mobile Search Row */ }
            <div>
             {searchOpen && (
                <div className="flex items-center mt-4 border p-2 rounded-md bg-gray-50 shadow-inner">
                    <input
                        type="text"
                        className="flex-grow text-black border-none outline-none "
                        placeholder="Enter a keyword or topic"
                    />
                    <button className="text-blue-500"><FaSearch size={24} /></button>
                </div>
            )}
            </div>

            { /* Second Row */ }
            <div className="flex items-center justify-between mt-4">
                {/* Back Link */}
                <Link href="/" className="flex items-center">
                    <FaArrowLeft size={22} className="pr-2" 
                        />
                            View All Cards
                </Link>

                {/* Cards */}
                <button
                    className="cursor-pointer"
                    onClick={toggleCards}
                >
                    <FaEllipsisV size={20} />
                    {cardsOpen && (
                    <nav
                        className={`${cardsOpen ? 'lg:block' : 'hidden'} block absolute top-35 right-0 bg-blue-900 shadow-md rounded-md p-2` }
                    >
                        <ul>
                            {allCardsLinks.map((link, index) => (
                                <li key={index} className="py-2 m-4">
                                    <a href={link.href}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    )}
                </button>
            </div>
        </header>
    );
}