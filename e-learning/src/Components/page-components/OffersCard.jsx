import React from 'react';

const OffersCard = ({ title, text, icon_1 }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
            <div className="icon mr-4">
                {icon_1}
            </div>
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-600">{text}</p>
            </div>
        </div>
    );
};

export default OffersCard;