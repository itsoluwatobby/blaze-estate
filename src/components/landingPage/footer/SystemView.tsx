import { useState } from 'react'
import { Link } from 'react-router-dom';

type SystemViewProps = {
  appName: string;
  ActionRoutes: NavProps[];
  NavigationRoutes: NavProps[];
  Socials: SocialProps[];
}

export default function SystemView(
  {
    appName, ActionRoutes, Socials, NavigationRoutes,
  }: SystemViewProps) {
  const [email, setEmail] = useState('');

  return (
    <section className='flex w-full gap-6 lg:gap-x-12 midScreen:hidden border border-gray-700 rounded p-8 px-6'>
      <div className='flex flex-col w-1/2 gap-4'>
        <h2 className='font-bold'>{appName}</h2>
        <p className='text-xs font-medium'>Join our newsletter to stay up to date on features and releases</p>

        <div className='maxScreen:hidden flex items-center gap-x-2 h-10 w-full'>
          <input
            type='email'
            value={email}
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
            className={`flex-auto border border-gray-400 rounded focus:outline-none focus:ring-0 placeholder:text-gray-400 p-3 px-2 text-xs w-full`}
          />
          <button className='flex-none self-center border-gray-400 focus:outline-none border rounded text-[10px] h-full px-3 whitespace-nowrap font-medium'>
            Subscribe
          </button>
        </div>

        <p className='text-[11px]'>By subscribing you agree to our <span className='underline'>Privacy Policy</span> and provide consent to receive updates from our company.</p>
      </div>

      <div className='self-end w-1/2 lg:w-[40%] flex gap4 justify-between'>
        <article className='text-xs flex flex-col gap-y-5'>
          <h4 className='font-medium'>Navigation</h4>
          <div className='flex flex-col gap-y-3 w-full text-xs'>
            {
              NavigationRoutes.map((route) => (
                <a key={route.name}
                  href={route.link}
                  className='text-[10px] whitespace-nowrap hover:underline underline-offset-1'
                >
                  {route.name}
                </a>
              ))
            }
          </div>
        </article>

        <article className='text-xs flex flex-col gap-y-5'>
          <h4 className='font-medium'>Legals</h4>
          <div className='flex flex-col gap-y-3 self-center w-full text-xs'>
            {
              ActionRoutes.map((route) => (
                <Link key={route.name}
                  to={route.link}
                  className='text-[10px] whitespace-nowrap hover:underline underline-offset-1'
                >
                  {route.name}
                </Link>
              ))
            }
          </div>
        </article>

        <article className='text-xs flex flex-col gap-y-5'>
          <h4 className='font-medium'>Follow Us</h4>
          <div className='flex flex-col gap-y-3 self-center w-full text-xs'>
            {
              Socials.map((route) => (
                <Link key={route.id}
                  to={route.link} target='_blank'
                  className='cursor-pointer flex items-center gap-1'
                >
                  <route.Icon />
                  <span>{route.name}</span>
                </Link>
              ))
            }
          </div>
        </article>
      </div>
    </section>
  )
}