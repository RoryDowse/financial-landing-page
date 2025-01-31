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
        <header className="bg-blue-900 text-white p-4 lg:px-8 lg:py-6">
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
                    {/* update to SVG logo*/}
                    <p className="text-2xl font-bold lg:text-4xl">{InfinityRewardsCard.bankName}</p>
                </Link>

                {/* Mobile Menu */}
                <nav
                    className={`absolute top-0 left-0 w-full bg-blue-800 shadow-lg transform transition-transform duration-300 ease-in-out ${
                        menuOpen ? 'translate-y-0' : '-translate-y-full'
                    } z-50`}
                    onClick={toggleMenu}
                >
                    <div className="flex items-center justify-between p-4">
                        <Link href="/">
                            <p className="text-2xl font-bold">{InfinityRewardsCard.bankName}</p>
                        </Link>
                        <button onClick={toggleMenu}>
                            <FaTimes size={24} />
                        </button>
                    </div>
                    <ul className="flex flex-col items-center py-4 space-y-4">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">About</Link></li>
                        <li><Link href="/">Services</Link></li>
                        <li><Link href="/">Contact</Link></li>
                    </ul>
                </nav>

                {/* Search Icon */}
                <div
                    className="cursor-pointer lg:hidden"
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
            <div className={`transition-all duration-300 ease-in-out ${searchOpen ? 'mt-4' : 'mt-0'}`}>
                <div
                    className={`flex items-center border p-2 rounded-md bg-gray-50 shadow-inner overflow-hidden transition-all duration-300 ease-in-out ${
                        searchOpen ? 'opacity-100 max-h-[200px]' : 'opacity-0 max-h-0'
                    }`}
                >
                    <input
                        type="text"
                        className="flex-grow text-black border-none outline-none "
                        placeholder="Enter a keyword or topic"
                    />
                    <button className="text-blue-500"><FaSearch size={24} /></button>
                </div>
            </div>

            { /* Second Row */ }
            <div className="flex items-center justify-between mt-4">
                {/* Back Link */}
                <Link href="/" className="flex items-center">
                    <FaArrowLeft size={22} className="pr-2" 
                        />
                            View All Cards
                </Link>

                {/* List of Cards */}
                <button
                    className="cursor-pointer"
                    onClick={toggleCards}
                >
                    {cardsOpen ? <FaTimes size={20} /> : <FaEllipsisV size={20} />}
                    {cardsOpen && (
                    <nav
                        className={`${cardsOpen ? 'lg:block' : 'hidden'} block absolute top-35 right-0 bg-blue-800 shadow-md rounded-md p-2 z-10` }
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