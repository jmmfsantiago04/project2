"use client"
import Footer from '@/components/Footer';
import Header from '../components/Header';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <Header backgroundImage="/HomeHeader.png" />
      <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 md:px-8 lg:px-12 desktop:px-24">
      <div className="max-w-6xl w-full mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">지붕공사의 탈인 청주지붕공사 입니다.</h1>
          <h2 className="text-xl font-semibold">지붕개발/전문감리/기와/판넬/금속 시공전문</h2>
        </div>
        <div className="space-y-4 bg-gray-200 p-6 rounded-lg shadow-md">
          <p>
            신속정확한확실한 서비스! 청주지붕공사에 맡겨주세요 고객만족 100%를 약속드립니다. 믿고 맡길 수 있는 신뢰도 최고! 청주 지붕공사를 찾아주셔서 감사합니다. 우수한 전문기술력으로 확실한 서비스를 책임집니다.
          </p>
          <p>
            저희 업체는 전문장비와 전문인력을 보유하고 있으며, 최상의 서비스로 고객 여러분의 신뢰에 보답하고자 최선을 다하고 있습니다. 또한 풍부한 경험과 축적된 기술을 바탕으로 고객님들에게 최고의 만족도를 제공하고자 최선을 다하고 있습니다.
          </p>
          <p>
            항상 고객을 먼저 생각하며, 저렴한 가격에 친절한 서비스로 고객님들께 다가설 것을 약속드립니다. 또한 시공 후에도 A/S 처리 등 철저한 신뢰와 믿음을 드릴 것이며, 보다 지붕신기술을 근간으로 계속하여 노력해 나갈 것을 약속드립니다. 감사합니다.
          </p>
        </div>
        <div className="text-center mt-4">
          <Link href="/about" legacyBehavior>
            <a className="inline-block bg-green-200 text-black py-2 px-4 rounded-lg">
              더보기
            </a>
          </Link>
        </div>
        <div className="text-center mt-8">
          <h2 className="text-xl font-semibold">시공사례</h2>
          <Link href="/after-construction" legacyBehavior>
            <a className="inline-block bg-green-200 text-black py-2 px-4 rounded-lg">
              이미지 더보기
            </a>
          </Link>
        </div>
      </div>
    </div>
    <div className='h-[20vw] md:h-[30vw]'></div>
      <Footer/>
    </div>
  );
};

export default Home;