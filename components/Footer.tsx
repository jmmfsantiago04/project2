// components/Footer.tsx
import React from 'react';
import CallButton from './CallButton';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex flex-col md:flex-row">
      <div className="hidden md:flex flex-1 bg-black text-white py-4 px-6" role="contentinfo" aria-label="Estimate Request">
        <h2 className="font-bold text-lg">견적신청</h2>
        <CallButton phoneNumber="010-7615-6737" />
      </div>
      <div className="flex-1 bg-teal-700 text-white py-4 px-6" role="contentinfo" aria-label="Inquiries">
        <h2 className="font-bold text-lg">문의하기</h2>
        <CallButton phoneNumber="010-7615-6737" />
      </div>
    </footer>
  );
};

export default Footer;

