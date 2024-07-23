// components/Header.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  backgroundImage: string;
}

const Header: React.FC<HeaderProps> = ({ backgroundImage }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 md:px-0">
        <nav className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 md:px-8 bg-transparent">
        <Image src="/asan-logo.svg" alt="Logo" width={64} height={64} className="w-16 h-16 md:w-24 md:h-24" />
          <div className="hidden md:flex space-x-4 md:space-x-8">
            <Link href="/home" className="text-lg font-semibold hover:underline">Home</Link>
            <Link href="/about" className="text-lg font-semibold hover:underline">업체소개</Link>
            <Link href="/after-construction" className="text-lg font-semibold hover:underline">시공사례</Link>
            <Link href="/form" className="text-lg font-semibold hover:underline">견적신청</Link>
          </div>
          <button onClick={toggleSidebar} className="md:hidden focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
        <div className="flex flex-col items-center justify-center h-full mt-16 md:mt-0">
          <h1 className="mt-10 text-2xl font-bold md:text-4xl">아산지붕공사</h1>
          <p className="mt-4 text-sm md:text-lg">
            30년 경력의 지붕장인 아산지붕공사 입니다.<br />
            지붕개량/칼라강판/기와/징크/헐크 시공전문
          </p>
          <div className="mt-4">
            <button className="px-4 py-2 text-lg font-semibold text-black bg-white rounded-md">
              010-7615-6737
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div className={`fixed top-0 right-0 h-full w-1/2 bg-black bg-opacity-90 z-20 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="absolute top-0 right-0 p-4">
          <button onClick={toggleSidebar} className="focus:outline-none">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-start justify-start h-full pt-20 pl-6 text-white space-y-6">
          <Link href="/home" className="text-lg font-semibold">Home</Link>
          <Link href="/about" className="text-lg font-semibold">업체소개</Link>
          <Link href="/after-construction" className="text-lg font-semibold">시공사례</Link>
          <Link href="/form" className="text-lg font-semibold">견적신청</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
