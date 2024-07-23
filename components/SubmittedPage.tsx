import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { fetchSubmittedData } from '@/actions/fetchSubmittedData';
import Modal from './Modal';

const SubmittedPage = () => {
  const [data, setData] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchSubmittedData();
      setData(result || []);
    };

    fetchData();
  }, []);

  const handleOpenModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNextModal = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handleBackModal = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="px-4 md:px-8 lg:px-12 desktop:px-24 pb-12 lg:pb-24 max-w-7xl mx-auto space-y-12">
      <h1 className="text-2xl md:text-4xl font-bold text-center my-12 lg:my-24">시공사례</h1>
      <div className="mb-4">
        <Image
          src="/main-hero-2.webp" 
          alt="Main Project"
          className="object-cover w-full h-[250px] md:h-[500px]"
          layout="responsive"
          width={700}
          height={475}
        />
        <p className="text-center text-base font-gmarketSans font-medium md:text-xl my-12 lg:my-24">사진을 클릭하면, 상세한 장기를 확인하실 수 있습니다.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={item.id} className="border rounded-lg p-2 shadow-md">
              <div className="relative w-full h-64 mb-2 cursor-pointer" onClick={() => handleOpenModal(index)}>
                <Image
                  src={item.requestImageUrl}
                  alt={item.subject}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg border-none"
                />
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center">No submitted inquiries found.</p>
        )}
      </div>
      {data.length > 0 && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onNext={handleNextModal}
          onBack={handleBackModal}
          title={data[currentIndex].subject}
          description={data[currentIndex].content}
          mainImage={data[currentIndex].requestImageUrl}
        />
      )}
    </div>
  );
};

export default SubmittedPage;
