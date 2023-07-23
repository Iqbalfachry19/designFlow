import React from 'react';

const Modal = ({ onClose, children }: any) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#2c2c2c] rounded-sm  max-w-md w-full">
        <div className="flex  justify-between m-4  ">
          <div className="flex space-x-2">
            <p className="text-white">Invite</p>
            <p className="text-gray-400">Publish</p>
          </div>
          <button
            onClick={onClose}
            className="text-[#969696] hover:text-gray-700 transition-all ease-in-out"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <hr />
        <div className="mt-4 m-4 text-white">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
