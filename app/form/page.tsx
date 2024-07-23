"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InquiryForm from "@/components/InquiryForm";

const Form: React.FC = () => {
    return (
      <div>
        <Header backgroundImage="/HomeHeader.png" />
        <InquiryForm/>
        <div className='h-[20vw] md:h-[30vw]'></div>
        <Footer/>
      </div>
    );
  };

  export default Form;