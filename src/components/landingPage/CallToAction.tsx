import { useState } from 'react'
import InputBox from './InputBox'
import LightHouse from '../../assets/Lightbox1.png';
import { ImageContainer } from '..';

export default function CallToAction() {

  const [inputs, setInputs] = useState<Inputs>(
    { checkIn: '', checkOut: '', guests: '' }
  )
  return (
    <section className='w-full flex flex-col px-20 py-16 maxMobile:px-5 maxMobile:py-8 gap-y-20'>

      <div className='w-full flex items-center gap-x-8 gap-y-4 justify-between flex-wrap'>
        <InputBox
          name={'Check In'} 
          type={"date"}
          keyProp={'checkIn'}
          value={inputs.checkIn}
          handleChange={setInputs}
        />
        <InputBox
          name={'Check Out'} 
          type={"date"}
          keyProp={'checkOut'}
          value={inputs.checkOut}
          handleChange={setInputs}
        />

        <div className='flex flex-col gap-1 text-sm w-56 maxMobile:w-full'>
          <label htmlFor={'room'} className='font-medium'>Room</label>

          <select name="room" id=""
          className='border border-gray-400 rounded focus:outline-none focus:ring-0 placeholder:text-gray-400 p-2 text-xs w-full'
          >
            <option value="Executive">Executive</option>
            <option value="Regular">Regular</option>
            <option value="VIP">VIP</option>
          </select>
        </div>

        <InputBox
          name={'Guests'} 
          type={"text"}
          keyProp={'guests'}
          placeholder='number of guests'
          value={inputs.guests}
          handleChange={setInputs}
        />
      </div>

      <div className='flex items-center justify-between maxScreen:flex-col gap-10'>

        <ImageContainer 
          source={LightHouse}
          name='Light box'
        />

        <div className='flex flex-col gap-y-4'>
          <h1 className='font-bold text-xl'>Start Your Vacation In Blazer Hotel</h1>

          <p className='text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum aliquam porro, hic, laboriosam ipsa quas incidunt molestiae delectus officiis sed quisquam quidem ex quo quos! Voluptatibus aut saepe porro perferendis!</p>

          <div className='flex items-center gap-3 text-xs'>
            <button className="bg-black focus:outline-none border rounded py-2 px-2.5 text-white">
              Book Now
            </button>
            <button className="focus:outline-none border border-gray-400 rounded py-2 px-2.5">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}