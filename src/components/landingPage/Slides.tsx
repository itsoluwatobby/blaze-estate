import LightBox from '../../assets/lightbox.png'

import ImageContainer from '../ImageContainer';
import { IoMdArrowForward, IoMdArrowBack } from 'react-icons/io';
import { MdStar } from 'react-icons/md';

export default function Slides() {

  return (
    <section className='flex w-full flex-col transition-all px-20 py-10 maxMobile:px-5 maxMobile:py-8 gap-y-8'>

      <div className='self-center flex items-center justify-center md:flex-row flex-col midScreen:gap-7 w-full lg:px-10 gap-4'>

        <div className='w-full h-auto flex flex-col md:flex-row gap-8 items-center'>
          <ImageContainer
            source={LightBox}
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

      </div>

      <div className='flex items-center justify-between lg:px-10'>
        <div className='flex items-center gap-x-1'>
          {
            [...Array(5).keys()].map((_, i) => (
              <span key={i}
              className={`rounded-full first:bg-black bg-gray-400 size-[6px]`}
              ></span>
            ))
          }
        </div>

        <div className='self-end flex items-center gap-x-3 text-black text-xl'>
          <button className='border-gray-400 focus:outline-none border rounded-full w-8 h-8 grid place-content-center hover:bg-black hover:text-white transition-colors'>
            <IoMdArrowBack className='' />
          </button>
          <button className='border-gray-400 focus:outline-none border rounded-full w-8 h-8 grid place-content-center hover:bg-black hover:text-white transition-colors'>
            <IoMdArrowForward className='' />
          </button>
        </div>
      </div>  

    </section>
  )
}
