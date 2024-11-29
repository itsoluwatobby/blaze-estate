import LightBox from '../../assets/lightbox.png'
import Room6 from '../../assets/room/room6.png'
import Spa from '../../assets/spa.png'
import Blog from '../../assets/blog.png';

import ImageContainer from '../ImageContainer';
import { IoMdArrowForward, IoMdArrowBack } from 'react-icons/io';
import { MdStar } from 'react-icons/md';
import { useRef, useState } from 'react';

let index = 0;
export default function Slides() {
  const [slideId, setSlideId] = useState('lightBox-slide');
  const slideRef = useRef<HTMLDivElement>(null);

  const SlideShow = [
    { id: 'lightBox-slide', image: LightBox },
    { id: 'room6-slide', image: Room6 },
    { id: 'spa-slide', image: Spa },
    { id: 'blog-slide', image: Blog },
  ];

  const modifyIndex = (
    val: number, operation: 'add'|'minus' = 'add'
  ) => {
    if (operation === 'minus')
      index = val < 0 ? val : val--;
    else
      index = val >= (SlideShow.length - 1) ? val : val++;
    console.log(index)
    return index
  }

  const scrollSlides = (direction: ScrollDirection) => {
    if (slideRef.current) {
      if (direction === 'left') {
        slideRef.current.scrollLeft -= 450;
        index = modifyIndex(index,'minus');
        console.log(modifyIndex(index,'minus'));
        console.log({ index })
        setSlideId(SlideShow[index].id)
      }
      else {
        slideRef.current.scrollLeft += 450;
        index = modifyIndex(index);
        console.log({ index })
        setSlideId(SlideShow[index].id)
      }
      if (slideRef.current.scrollLeft === 0) {
        setSlideId(SlideShow[index].id);
      }
    }
  }
// console.log(index)
  return (
    <section className='flex w-full flex-col transition-all px-20 py-10 maxMobile:px-5 maxMobile:py-8 gap-y-8'>

      <div
        ref={slideRef}
        className='hideBars self-center flex items-center w-full lg:px-10 gap-4 overflow-x-scroll transition-all'>
        {
          SlideShow.map((slide) => (
            <div
              key={slide.id}
              id={slide.id}
              className='flex-none w-full h-auto flex flex-col md:flex-row gap-8 items-center'>
              <ImageContainer
                source={slide.image}
                name='Light box'
                classNames='h-52 midScreen:h-72 md:w-1/2 w-full'
                imageClassNames='none'
              />

              <div className='flex flex-col gap-5 items-start'>
                <div className='flex items-center'>
                  {
                    [...Array(5).keys()].map((_, i) => (
                      <MdStar key={i} />
                    ))
                  }
                </div>
                <p className='text-gray-700 text-[13px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, earum! Commodi modi animi alias, sed illo, dolore distinctio ipsam optio dolorem natus sequi! Consequatur repudiandae doloremque obcaecati, asperiores qui magnam.</p>

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

        <div className='self-end flex items-center gap-x-3 text-black text-xl'>
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
