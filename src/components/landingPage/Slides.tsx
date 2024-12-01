import LightBox from '../../assets/lightbox.png'
import Room6 from '../../assets/room/room6.png'
import Spa from '../../assets/spa.png'
import Blog from '../../assets/blog.png';

import ImageContainer from '../ImageContainer';
import { IoMdArrowForward, IoMdArrowBack } from 'react-icons/io';
import { MdStar } from 'react-icons/md';
import { LegacyRef, useRef, useState, useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks';

export default function Slides() {
  const [slideId, setSlideId] = useState('lightBox-slide');
  const slideRef = useRef<HTMLDivElement>(null);
  const { intersecting, observerRef } = useIntersectionObserver(
    { screenPosition: '0px', threshold: 0.7 },
  );

  const SlideShow = [
    { id: 'lightBox-slide', image: LightBox },
    { id: 'room6-slide', image: Room6 },
    { id: 'spa-slide', image: Spa },
    { id: 'blog-slide', image: Blog },
  ];

  useEffect(() => {
    setSlideId(intersecting.node.id)
  }, [intersecting.node.id])

  const scrollSlides = (direction: ScrollDirection) => {
    if (slideRef.current) {
      if (direction === 'left') {
        if (slideRef.current.scrollLeft === 0) {
          slideRef.current.scrollLeft = 1572;
          setSlideId(SlideShow[SlideShow.length - 1].id);
        } else slideRef.current.scrollLeft -= 530;
      }
      else {
        if (slideRef.current.scrollLeft >= 1572) {
          slideRef.current.scrollLeft = 0;
          setSlideId(SlideShow[0].id);
        } else slideRef.current.scrollLeft += 530;
      }
    }
  }

  return (
    <section className='flex w-full flex-col transition-all px-20 py-10 maxMobile:px-5 maxMobile:py-8 gap-y-8'>

      <div
        ref={slideRef}
        className='hideBars self-center flex items-center w-full lg:px-10 gap-4 lg:gap-x-10 overflow-x-scroll transition-all'>
        {
          SlideShow.map((slide) => (
            <div
              key={slide.id}
              id={slide.id}
              ref={observerRef as LegacyRef<HTMLDivElement>}
              className='flex-none w-full h-auto flex flex-col md:flex-row gap-6 items-center'>
              <ImageContainer
                source={slide.image}
                name='Light box'
                classNames='h-52 midScreen:h-72 md:w-[50%] w-full'
                imageClassNames='none'
              />

              <div className='p-2 flex flex-col gap-5 items-start'>
                <div className='flex items-center'>
                  {
                    [...Array(5).keys()].map((_, i) => (
                      <MdStar key={i} />
                    ))
                  }
                </div>
                <p className='text-gray-700 text-[13px] w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, earum! Commodi modi animi alias, sed illo, dolore distinctio ipsam optio dolorem natus sequi! Consequatur repudiandae doloremque obcaecati, asperiores qui magnam.</p>

                <span className='font-medium text-sm'>Gordon Kelly</span>
              </div>
            </div>
          ))
        }
      </div>

      <div className='flex items-center justify-between lg:px-10'>
        <div className='flex items-center gap-x-1'>
          {
            SlideShow.map((slide) => (
              <span key={slide.id}
                className={`transition-colors rounded-full ${slideId === slide.id ? 'bg-black' : 'bg-gray-400'} size-[6px]`}
              ></span>
            ))
          }
        </div>

        <div className='md:hidden self-end flex items-center gap-x-3 text-black text-xl'>
          <button
            onClick={() => scrollSlides('left')}
            className='border-gray-400 focus:outline-none border rounded-full w-8 h-8 grid place-content-center hover:bg-black hover:text-white transition-colors'>
            <IoMdArrowBack className='' />
          </button>
          <button
            onClick={() => scrollSlides('right')}
            className='border-gray-400 focus:outline-none border rounded-full w-8 h-8 grid place-content-center hover:bg-black hover:text-white transition-colors'>
            <IoMdArrowForward className='' />
          </button>
        </div>
      </div>

    </section>
  )
}
