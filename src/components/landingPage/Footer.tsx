import { useState } from 'react';
import { useAppContext } from '../../hooks';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { FaInstagram, FaSquareXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const { appName } = useAppContext();
  const [email, setEmail] = useState('');

  const NavigationRoutes = [
    { name: 'About', link: '#about' },
    { name: 'Services', link: '#services' },
    { name: 'Profile', link: '#profile' },
    { name: 'Gallery', link: '#gallery' },
    { name: 'Contact', link: '#contact' },
  ];

  const Socials = [
    { id: 1, Icon: FaFacebookF, link: 'https://www.facebook.com/oluwatobi-akinola' },
    { id: 1, Icon: FaInstagram, link: 'https://www.instagram.com/itsoluwatobby' },
    { id: 1, Icon: FaSquareXTwitter, link: 'https://www.twitter.com/itsoluwatobby' },
    { id: 1, Icon: FaLinkedin, link: 'https://www.linkedIn.com/in/itsoluwatobby' },
  ]
  
  const ActionRoutes = [
    { name: 'Privacy Policy', link: '#privacy' },
    { name: 'Terms of Services', link: '#termsOfServices' },
    { name: 'Cookies Settings', link: '#cookiesSettings' },
  ]

  return (
    <footer className='flex w-full flex-col transition-all px-20 py-6 maxMobile:px-5 gap-y-8 pb-10'>
      <div className='flex flex-col w-full maxScreen:items-center gap-4 midScreen:hidden border border-gray-700 rounded p-8'>
        <h2 className='font-bold'>{appName}</h2>
        <p className='text-xs font-medium'>Join our newsletter to stay up to date on features and releases</p>

        <div className='maxScreen:hidden flex items-center gap-x-2 h-10 w-full'>
          <input
            type='email'
            value={email}
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
            className={`flex-auto border border-gray-400 rounded focus:outline-none focus:ring-0 placeholder:text-gray-400 p-3 text-xs w-full`}
          />
          <button className='flex-none self-center border-gray-400 focus:outline-none border rounded text-[10px] w-24 h-full px-4 whitespace-nowrap font-medium'>
            Subscribe
          </button>
        </div>

        <p className='text-xs'>By subscribing you agree to our <span className='underline'>Privacy Policy</span> and provide consent to receive updates from our company.</p>
      </div>

      <div className='hidden midScreen:flex flex-col w-full maxScreen:items-center gap-6'>
        <h2 className='font-bold'>{appName}</h2>
        
        <div className='flex items-center w-full text-xs font-semibold justify-between'>
          {
            NavigationRoutes.map((route) => (
              <Link key={route.name}
              to={route.link}
              className='hover:underline underline-offset-1 transition-transform'
              >
                {route.name}
              </Link>
            ))
          }
        </div>
        
        <div className='flex items-center font-semibold gap-5 self-center w-[33%] text-xl'>
          {
            Socials.map((route) => (
              <Link key={route.id}
              to={route.link} target='_blank'
              className='cursor-pointer'
              >
                <route.Icon />
              </Link>
            ))
          }
        </div>

        <div className='w-full bg-black h-[1px]' />

        <p className='text-[13px]'>2023 {appName}. All right reserved.</p>

        <div className='flex items-center justify-between self-center w-full text-xs font-semibold px-4'>
          {
            ActionRoutes.map((route) => (
              <Link key={route.name}
              to={route.link}
              className='underline'
              >
                {route.name}
              </Link>
            ))
          }
        </div>
      </div>

      <p className='midScreen:hidden text-sm'>2023 {appName}. All right reserved.</p>
    </footer>
  )
}
