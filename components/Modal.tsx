// components/Modal.tsx

import React from 'react';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onBack: () => void;
  title: string;
  description: string;
  mainImage: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onNext, onBack, title, description, mainImage }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          닫기
        </button>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-2 flex justify-center">
            <div className="relative w-[432px] h-[432px]">
              <Image
                src={mainImage}
                alt="Main Image"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg md:rounded-t-none md:rounded-l-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col justify-between">
            <h2 className="text-lg md:text-xl font-bold mb-4">{title}</h2>
            <p className="text-sm md:text-base mb-4">{description}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={onBack}
                className="bg-blue-500 text-white p-2 rounded-full flex items-center justify-center w-8 h-8 md:w-10 md:h-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 md:w-6 md:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={onNext}
                className="bg-blue-500 text-white p-2 rounded-full flex items-center justify-center w-8 h-8 md:w-10 md:h-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 md:w-6 md:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
