import React from 'react';

const Header = ({ children }) => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto">
                {children}
            </div>
        </header>
    );
};

export default Header;