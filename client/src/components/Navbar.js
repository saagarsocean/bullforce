import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import navbarLogo from '../images/navbar-logo.png'

const Navbar = () => {
    const navigate = useNavigate()

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <div style={{ backgroundColor: 'rgb(11, 20, 32)' }} className="fixed top-0 left-0 w-full z-10 h-16">
            <div className="relative h-full flex items-center">
                <motion.img
                    src={navbarLogo}
                    alt="Navbar Logo"
                    className="h-12 object-contain absolute left-16 mt-1 cursor-pointer"
                    onClick={handleLogoClick}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </div>
    );
};

export default Navbar
