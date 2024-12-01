import Room1 from '../../assets/room/room1.png'
import Room2 from '../../assets/room/room2.png'
import Room3 from '../../assets/room/room3.png'
import Room4 from '../../assets/room/room4.png'
import Room6 from '../../assets/room/room6.png'
import LightBox from '../../assets/Lightbox2.png'
import { helper } from '../../utils'

import RoomDetails from './RoomDetails'
import ImageContainer from '../ImageContainer'
import Assets from './Assests'
import { MdKeyboardArrowRight } from 'react-icons/md'

export default function Rooms() {

  return (
    <section 
    id='about'
    className='flex w-full flex-col transition-all px-20 py-20 maxMobile:px-5 maxMobile:py-8 gap-y-10'>
      <div className='flex flex-col gap-y-2 items-center'>
        <small className='font-medium'>Rooms</small>
        <h1 className='font-semibold text-xl'>OUR ROOMS</h1>
        <p className='text-xs'>Lorem ipsum dokr alt amel, consectetur elit.</p>
      </div>

      <div className='self-center flex items-center justify-center md:flex-row flex-col gap-x-4 midScreen:gap-7 w-fit p-1 mdh-80'>

        <RoomDetails
          imageName='Queen beds'
          imageSource={Room1}
          roomName={'Double exclusive 2 queen beds'}
          description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum aliquam porro, hic, laboriosam ipsa quas'}
          price={helper.formatPrice(45)}
          classNames='md:h-64 midScreen:h-72 w-full md:w-full'
          imageClassNames='none'
          containerClass={{
            container: 'md:min-w-80 md:max-w-[45%] md:w-[45%] h-full gap-y-4',
            lowerContainer: 'p-4 pb-4 md:gap-y-4 midScreen:gap-y-4',
            text: 'text-xs md:text-xs',
            title: 'text-xl font-bold',
            buttonClass: 'px-2.5'
          }}
        />

        <div className='flex-none flex items-center flex-col gap-2 gap-y-6 w-full mdw-1/2 md:w-fit rounded'>

          <div className='flex items-center w-full midScreen:flex-col gap-x-4 gap-y-6'>
            <RoomDetails
              imageName='Deluxe'
              imageSource={Room2}
              roomName={'Double deluxe'}
              description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'}
              price={helper.formatPrice(45)}
            />
            <RoomDetails
              imageName='Super king bed'
              imageSource={Room3}
              roomName={'Superior king bed'}
              description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'}
              price={helper.formatPrice(45)}
            />
          </div>

          <div className='flex items-center w-full midScreen:flex-col gap-x-4 gap-y-6'>
            <RoomDetails
              imageName='Double deluxe king bed'
              imageSource={Room4}
              roomName={'Double deluxe king bed'}
              description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'}
              price={helper.formatPrice(45)}
            />
            <RoomDetails
              imageName='Double queen bed'
              imageSource={Room6}
              roomName={'Double queen bed'}
              description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'}
              price={helper.formatPrice(45)}
            />
          </div>

        </div>
      </div>

      <div className='self-center flex items-center justify-center md:flex-row flex-col gap-x-8 midScreen:gap-7 w-full lg:px-10 p-1 my-10'>

        <ImageContainer
          source={LightBox}
          name='Light box'
          classNames='h-52 midScreen:h-72 w-full mdw-full md:min-w-[45%] md:max-w-[45%] md:w-[45%] hfull'
          imageClassNames='none'
        />

        <div className='flex-none flex items-center flex-col gap-x-4 gap-y-2 w-full mdw-1/2 md:w-fit rounded'>

          <div className='flex items-center w-full mobile:flex-col gap-x-2 gap-y-6'>
            <Assets
              title={'Private Pool'}
              description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'}
            />
            <Assets
              title={'Spa & Massage'}
              description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'}
            />
          </div>

          <div className='flex items-center w-full mobile:flex-col gap-x-2 gap-y-6'>
            <Assets
              title={'Gym'}
              description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'}
            />
            <Assets
              title={'Restaurant'}
              description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'}
            />
          </div>

          <div className={`self-start flex items-center gap-2 text-xs md:gap-2 midScreen:gap-y-2`}>
            <button className={`border-gray-400 focus:outline-none border rounded text-[10px] h-8 px-1.5 whitespace-nowrap`}>
              Book Now
            </button>
            <button className={`focus:outline-none rounded flex items-center gap-x-0.5 text-[10px] h-8 px-1.5 whitespace-nowrap`}>
              <span>Learn more</span>
              <MdKeyboardArrowRight className='text-xl' />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
