/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import InputBox from './InputBox'
import LightHouse from '../../assets/lightbox1.png';
import { ImageContainer } from '..';
import toast from 'react-hot-toast';

const initInputs = {
  checkIn: '',
  checkOut: '',
  guests: '',
  room: 'Executive' as RoomLevel,
};

export default function CallToAction() {

  const [inputs, setInputs] = useState<Inputs>(initInputs);

  const canSubmit = [...Object.values(inputs)].every(Boolean);

  const submitForm = () => {
    try {
      if (!canSubmit) return;
      setInputs(initInputs);
      toast.success('Room available');
    } catch (err: any) {
      toast.error('Network error', err.message);
    }
  }
  return (
    <section  
    className='w-full flex flex-col px-16 py-16 maxMobile:px-5 maxMobile:py-8 gap-y-20'>

      <article className='w-full flex flex-col items-center gap-8'>
        <div className='w-full flex items-center gap-x-8 gap-y-4 justify-between flex-wrap'>
          <InputBox
            name='Check In'
            type='date'
            keyProp='checkIn'
            value={inputs.checkIn}
            handleChange={setInputs}
          />
          <InputBox
            name='Check Out'
            type='date'
            keyProp='checkOut'
            value={inputs.checkOut}
            handleChange={setInputs}
          />

          <div className='flex flex-col gap-1 text-sm w-56 maxScreen:w-full'>
            <label htmlFor={'room'} className='font-medium'>Room</label>

            <select name="room" id=""
              onChange={e => setInputs((prev) => ({ ...prev, room: e.target.value as RoomLevel }))}
              className='border border-gray-400 rounded focus:outline-none focus:ring-0 placeholder:text-gray-400 p-2 text-xs w-full'
            >
              <option value="Executive">Executive</option>
              <option value="Regular">Regular</option>
              <option value="VIP">VIP</option>
            </select>
          </div>

          <InputBox
            name='Guests'
            type='number'
            keyProp='guests'
            placeholder='number of guests'
            value={inputs.guests}
            handleChange={setInputs}
          />

        </div>
        
        <button 
        onClick={submitForm}
        className='self-center bg-black text-white focus:outline-none border rounded text-xs h-9 px-6 whitespace-nowrap maxScreen:w-full font-medium'>
          Check Availability
        </button>
      </article>

      <div className='flex items-center justify-between maxScreen:flex-col gap-10 gap-x-6'>

        <ImageContainer
          source={LightHouse}
          name='Light box'
          classNames='h-52 midScreen:h-72 md:w-[50%] wfull'
          imageClassNames='none'
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