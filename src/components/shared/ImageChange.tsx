
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { NextPage } from 'next'

export const ImageChange: NextPage = () => {
  const [imageSrc, setImageSrc] = useState('/main/main-img.png');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setImageSrc('/main/main-img_mobile.png');
      } else {
        setImageSrc('/main/main-img.png'); 
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Инициализация картинки в зависимости от начальной ширины экрана
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <Image
        width={400}
        height={400}
        src={imageSrc}
        alt='Mobile main-bg'
        className='main-img'
        priority
      />
  );
};

