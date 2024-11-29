import Room6 from '../../assets/room/room6.png'
import Spa from '../../assets/spa.png'
import LightBox from '../../assets/lightbox.png'
import Blog from '../../assets/blog.png';

import ImageContainer from '../ImageContainer';

export default function Gallery() {

  return (
    <section 
    id='#gallery'
    className='flex w-full flex-col transition-all px-20 py-20 maxMobile:px-5 maxMobile:py-8 gap-y-2'>
      <div className='flex flex-col gap-y-2 items-center'>
        <small className='font-semibold text-2xl'>Gallery</small>
        <p className='text-xs'>Lorem ipsum dokr alt amel, consectetur elit.</p>
      </div>

      <div className='self-center flex items-center justify-center md:flex-row flex-col midScreen:gap-7 w-full lg:px-10 my-10 gap-4'>

        <div className='w-full h-auto flex flex-col md:flex-col gap-4 items-center'>
          <ImageContainer
            source={LightBox}
            name='Light box'
            classNames='h-52 md:h-[60%] midScreen:h-72 md:w-full w-full'
            imageClassNames='none'
          />
          <ImageContainer
            source={Blog}
            name='Light box'
            classNames='h-52 md:h-[40%] midScreen:h-72 md:w-full w-full'
            imageClassNames='none'
          />
        </div>

        <div className='w-full h-auto flex flex-col md:flex-col gap-4 items-center'>
          <ImageContainer
            source={Spa}
            name='Light box'
            classNames='h- md:h-[40%] midScreen:h-72 md:w-full w-full'
            imageClassNames='none'
          />
          <ImageContainer
            source={Room6}
            name='Light box'
            classNames='h52 md:h-[60%] midScreen:h-72 md:w-full w-full'
            imageClassNames='none'
          />
        </div>

      </div>
        
        <button className='self-center border-gray-400 focus:outline-none border rounded text-[10px] w-20 h-8 px-1.5 whitespace-nowrap maxScreen:w-full font-medium'>
          View more
        </button>

    </section>
  )
}
