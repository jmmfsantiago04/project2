"use client"
import Header from '@/components/Header';
import SubmittedPage from '@/components/SubmittedPage';
import Footer from '@/components/Footer';

const Submitted = () => {
  return (
    <div>
      <Header backgroundImage="/HomeHeader.png" />
      <SubmittedPage/>
      <div className='h-[20vw] md:h-[30vw]'></div>
      <Footer/>
    </div>
  );
};

export default Submitted;
