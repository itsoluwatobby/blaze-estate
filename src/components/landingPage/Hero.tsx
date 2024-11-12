import HeroImage from '../../assets/hero.jpg';
import { setCustomBackgroundImage } from '../../utils/styles';

export default function Hero() {
  return (
    <section>
      <div
      style={setCustomBackgroundImage(
        HeroImage,
        {
          backgroundColor: '#4e2a65',
        }
      )}
      className='relative w-full h-[calc(100vh-56px)]'>
        <div className='w-full absolute bg-gray-800 bg-opacity-50 h-full text-white p-8 lg:pl-11 flex items-center'>
          <div className='flex flex-col gap-y-6 sm:w-96 w-[80%]'>
            <h1 className='font-semibold text-4xl'>
              Enjoy Luxury Hotel Experience
            </h1>

            <p className='text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis a consequatur aspernatur, sunt ullam sapiente id magni nemo quo vel ad cupiditate atque expedita officia hic molestiae, ducimus soluta iure.</p>

            <div className='flex items-center gap-3 text-xs'>
              <button className="bg-white focus:outline-none border rounded py-2 px-2.5 text-black">
                Book Now
              </button>
              <button className="focus:outline-none border border-white rounded py-2 px-2.5">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}