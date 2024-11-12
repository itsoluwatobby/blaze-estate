import Room1 from '../../assets/room/room1.png'
import Room2 from '../../assets/room/room2.png'
import Room3 from '../../assets/room/room3.png'
import Room4 from '../../assets/room/room4.png'
import Room6 from '../../assets/room/room6.png'
import { helper } from '../../utils'

import RoomDetails from './RoomDetails'
export default function Rooms() {

  return (
    <section className='flex w-full flex-col px-14 py-20 maxMobile:px-5 maxMobile:py-8 gap-y-10'>
      <div className='flex flex-col gap-y-2 items-center'>
        <small className='font-medium'>Rooms</small>
        <h1 className='font-semibold text-xl'>OUR ROOMS</h1>
        <p className='text-xs'>Lorem ipsum dokr alt amel, consectetur elit.</p>
      </div>

      <div className='self-center flex items-center md:flex-row flex-col gap-x-6 midScreen:gap-7 w-fit lg:px-10 p-1'>

        <RoomDetails
          imageName='Queen beds'
          imageSource={Room1}
          roomName={'Double exclusive 2 queen beds'}
          description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum aliquam porro, hic, laboriosam ipsa quas'}
          price={helper.formatPrice(45)}
          classNames='h-52 midScreen:h-72 w-full md:w-full'
          imageClassNames='none'
          containerClass={{
            container: 'w96 md:w-[45%] h-full w-full'
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
              classNames='md:w-full w-full h-20 midScreen:h-72 rounded-none'
              imageClassNames='rounded-none'
              containerClass={{
                text: 'text-[10px]',
                title: 'font-semibold text-[13px] midScreen:text-xl midScreen:font-bold',
                buttonClass: 'text-[10px] h-8 px-1.5 whitespace-nowrap',
                gap: 'gap-0 midScreen:gap-y-2',
                container: 'midScreen:h-auto h-56 gap-y-1 midScreen:w-full md:min-w-44 md:max-w-48',
                lowerContainer: 'gap-y-2 p-2 py-1.5',
              }}
            />
            <RoomDetails
              imageName='Super king bed'
              imageSource={Room3}
              roomName={'Superior king bed'}
              description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'}
              price={helper.formatPrice(45)}
              classNames='md:w-full w-full midScreen:h-72 h-20 rounded-none'
              imageClassNames='rounded-none'
              containerClass={{
                text: 'text-[10px]',
                title: 'font-semibold text-[13px] midScreen:text-xl midScreen:font-bold',
                buttonClass: 'text-[10px] h-8 px-1.5 whitespace-nowrap',
                gap: 'gap-0',
                container: 'h-56 midScreen:h-auto gap-y-1 midScreen:w-full md:min-w-44 md:max-w-48',
                lowerContainer: 'gap-y-2 p-2 py-1.5',
              }}
            />
          </div>
          <div className='flex items-center w-full midScreen:flex-col gap-x-4 gap-y-6'>
            <RoomDetails
              imageName='Double deluxe king bed'
              imageSource={Room4}
              roomName={'Double deluxe king bed'}
              description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'}
              price={helper.formatPrice(45)}
              classNames='md:w-full w-full h-20 midScreen:h-72 rounded-none'
              imageClassNames='rounded-none'
              containerClass={{
                text: 'text-[10px]',
                title: 'font-semibold text-[13px] midScreen:text-xl midScreen:font-bold',
                buttonClass: 'text-[10px] h-8 px-1.5 whitespace-nowrap',
                gap: 'gap-0',
                container: 'midScreen:h-auto h-56 gap-y-1 mdw-44 midScreen:w-full md:min-w-44 md:max-w-48',
                lowerContainer: 'gap-y-2 p-2 py-1.5',
              }}
            />
            <RoomDetails
              imageName='Double queen bed'
              imageSource={Room6}
              roomName={'Double queen bed'}
              description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'}
              price={helper.formatPrice(45)}
              classNames='md:w-full w-full h-20 midScreen:h-72 rounded-none'
              imageClassNames='rounded-none'
              containerClass={{
                text: 'text-[10px]',
                title: 'font-semibold text-[13px] midScreen:text-xl midScreen:font-bold',
                buttonClass: 'text-[10px] h-8 px-1.5 whitespace-nowrap',
                gap: 'gap-0',
                container: 'midScreen:h-auto h-56 gap-y-1 mdw-44 midScreen:w-full md:min-w-44 md:max-w-48',
                lowerContainer: 'gap-y-2 p-2 py-1.5',
              }}
            />
          </div>
          
        </div>
      </div>
    </section>
  )
}
