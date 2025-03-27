import React from 'react';

const CategoriesCard = ({ title, icon_1, icon_2, icon_3, btnIcon, startLearningEvent, children }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-2">
            <div className="flex items-center">
                <div className="flex flex-col items-center">
                    {icon_1}
                    {icon_2}
                    {icon_3}
                </div>
                <h3 className="text-xl font-semibold ml-4">{title}</h3>
            </div>
            <div className="mt-4">
                {children}
            </div>
            <button 
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                onClick={startLearningEvent}
            >
                {btnIcon} Start Learning
            </button>
        </div>
    );
};

export default CategoriesCard;