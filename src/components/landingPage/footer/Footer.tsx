import { useAppContext } from '../../../hooks';
import MobileView from './MobileView';
import SystemView from './SystemView';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { FaInstagram, FaSquareXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const { appName } = useAppContext();

  const NavigationRoutes = [
    { name: 'About', link: '#about' },
    { name: 'Services', link: '#services' },
    { name: 'Profile', link: '#profile' },
    { name: 'Gallery', link: '#gallery' },
    { name: 'Contact', link: '#contact' },
  ];

  const Socials = [
    { id: 1, name: 'Facebook', Icon: FaFacebookF, link: 'https://www.facebook.com/oluwatobi-akinola' },
    { id: 2, name: 'Instagram', Icon: FaInstagram, link: 'https://www.instagram.com/itsoluwatobby' },
    { id: 3, name: 'Twitter', Icon: FaSquareXTwitter, link: 'https://www.twitter.com/itsoluwatobby' },
    { id: 4, name: 'LinkedIn', Icon: FaLinkedin, link: 'https://www.linkedIn.com/in/itsoluwatobby' },
  ];

  const ActionRoutes = [
    { name: 'Privacy Policy', link: '#privacy' },
    { name: 'Terms of Services', link: '#termsOfServices' },
    { name: 'Cookies Settings', link: '#cookiesSettings' },
  ];

  return (
    <footer className='flex w-full flex-col transition-all px-20 py-6 maxMobile:px-5 gap-y-8 pb-10'>
      <SystemView
        appName={appName}
        NavigationRoutes={NavigationRoutes}
        ActionRoutes={ActionRoutes}
        Socials={Socials}
      />

      <MobileView
        appName={appName}
        NavigationRoutes={NavigationRoutes}
        ActionRoutes={ActionRoutes}
        Socials={Socials}
      />

      <p className='midScreen:hidden text-sm'>2023 {appName}. All right reserved.</p>
    </footer>
  )
}
