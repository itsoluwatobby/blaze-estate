import { Link } from 'react-router-dom';

type MobileViewProps = {
  appName: string;
  ActionRoutes: NavProps[];
  NavigationRoutes: NavProps[];
  Socials: SocialProps[];
}

export default function MobileView(
  {
    appName, ActionRoutes, NavigationRoutes, Socials,
  }: MobileViewProps) {

  return (
    <div className='hidden midScreen:flex flex-col w-full items-center gap-6'>
        <h2 className='font-bold'>{appName}</h2>
        
        <div className='flex items-center w-full text-xs font-semibold justify-between'>
          {
            NavigationRoutes.map((route) => (
              <a key={route.name}
              href={route.link}
              className='hover:underline underline-offset-1 transition-transform'
              >
                {route.name}
              </a>
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
  )
}