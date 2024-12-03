import { NavigationNames } from '../../utils';
import { TabName } from './TabName';
import { useAppContext } from '../../hooks';

export const Modal = () => {
  const { toggleModal } = useAppContext();

  return (
    <section
      className={`md:hidden ${toggleModal ? 'fixed' : 'hidden'} w-fit right-0 z-10 bg-white p-5 flex flex-col focus:border-0 focus:outline-none items-center gap-6 shadow-md rounded-tl-md rounded-br-md transition-transform text-xs`}>

      <div className="flex flex-col items-center gap-4 font-medium">
        {
          NavigationNames.map((nav) => (
            <TabName key={nav.name} nav={nav} />
          ))
        }
      </div>

      <div className="flex items-center gap-5 font-medium whitespace-nowrap text-[11px]">
        <button className="focus:outline-none border border-black rounded-md py-1 px-2.5">
          Sign In
        </button>
        <button className="bg-black text-white focus:outline-none border border-black rounded-md py-1 px-2">
          Get Started
        </button>
      </div>

    </section>
  )
}
