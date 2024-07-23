"use client"
import Footer from '@/components/Footer';
import Header from '@/components/Header';


const About: React.FC = () => {
  return (
    <div>
      <Header backgroundImage="/main-hero-2.webp" />
      <div className="container mx-auto break-keep text-center z-20 relative">
        <div className='flex flex-col items-center justify-center mt-12 lg:mt-24 desktop:mt-60 font-gmarketSans space-y-12 z-10 desktop:space-y-24'>
        <h1 className="text-2xl font-bold">지붕공사의 탈인 아산지붕공사 입니다.</h1>
        <h2 className="text-xl font-semibold">업체소개</h2>
        <div className="bg-gray-200 p-4 md:p-8 rounded-lg shadow-md">
          <p>믿고 맡길 수 있는 신뢰도 최고! 아산 지붕공사를 찾아주셔서 감사합니다.</p>
          <p>아산지붕공사는 공정적인 시스템으로 운영되고 있습니다. 공정직영의 포스코 정품자재만을 사용하여 저렴한 가격에 시공 해드립니다.</p>
          <p>우수한 전문기술력으로 확실한 서비스를 책임집니다.</p>
          <p>저희 업체는 전문장비와 전문인력을 보유하고 있으며, 최상의 서비스로 고객 여러분의 신뢰에 보답하고자 최선을 다하고 있습니다. 또한 풍부한 경험과 축적된 기술을 바탕으로 고객님들에게 최고의 만족도를 제공하고자 최선을 다하고 있습니다.</p>
          <p>항상 고객을 먼저 생각하며, 저렴한 가격에 친절한 서비스로 고객님들께 다가설 것을 약속드립니다. 또한 시공 후에도 A/S 처리 등 철저한 신뢰와 믿음을 드릴 것이며, 보다 지붕신기술을 근간으로 계속하여 노력해 나갈 것을 약속드립니다.</p>
          <p>감사합니다.</p>
          </div>
          <div className='flex items-center justify-center my-12 flex-col gap-4 md:gap-8 font-gmarketSans"'>
        <p className="mt-4">견적문의전화: 010-7615-6737</p>
          </div>
      </div>
      <div className='h-[20vw] md:h-[30vw]'></div>
      </div>
      
      <Footer/>
    </div>
  );
};

export default About;








