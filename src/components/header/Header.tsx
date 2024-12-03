import { useAppContext } from "../../hooks";
import { NavigationNames } from "../../utils";
import { RiMenuFill, RiMenu4Fill } from "react-icons/ri";
import { TabName } from "./TabName";
// import { Modal } from "./Modal";
// import { useRef } from "react";

export default function Header() {
  const { appName, toggleModal, setToggleModal } = useAppContext();

  return (
    <header className="sticky z-50 bg-white w-full top-0 shadow-sm pt-5 pb-3 px-7 maxMobile:px-4 flex justify-between items-center">

      <h1 className="font-semibold text-base">{appName}</h1>

      <div className="hidden md:flex items-center gap-x-3 text-[13px] font-medium">
        <div className="self-en flex items-center gap-x-4 font-medium">
          {
            NavigationNames.map((nav) => (
              <TabName key={nav.name} nav={nav} />
            ))
          }
        </div>

        <button className="focus:outline-none border border-black rounded-md py-1 px-2.5">
          Sign In
        </button>
        <button className="bg-black text-white focus:outline-none border border-black rounded-md py-1 px-2.5">
          Get Started
        </button>
      </div>

      <button 
      onClick={() => setToggleModal((prev) => !prev)}
      className="hidden transition-transform midScreen:block focus:outline-none">
        {
          toggleModal ?
          <RiMenu4Fill className={`text-2xl`} />
          :
          <RiMenuFill className={`text-2xl`} />
        }
      </button>

    </header>
  )
}
