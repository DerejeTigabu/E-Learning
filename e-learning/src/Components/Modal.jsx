import React from 'react';

const Modal = ({ title, text, cancelEvent }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full">
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                <p className="mb-4">{text}</p>
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded" 
                    onClick={cancelEvent}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;