import { useAppContext } from "../../hooks";
import { NavigationNames } from "../../utils";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const { appName } = useAppContext();

  return (
    <header className="sticky z-50 bg-white w-full top-0 shadow-sm py-3 px-7 flex justify-between h-14 items-center">

      <h1 className="font-semibold text-base">{appName}</h1>

      <div className="hidden md:flex items-center gap-x-3 text-[13px] font-medium">
        <div className="self-en flex items-center gap-x-4 font-medium">
          {
            Object.values(NavigationNames).map((nav) => (
              <TabName key={nav} name={nav} />
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

      <button className="hidden midScreen:block focus:outline-none">
        <GiHamburgerMenu className={`text-3xl`} />
      </button>

    </header>
  )
}


type TabNameProp = {
  name: string;
}

const TabName = ({ name }: TabNameProp) => {

  return (
    <a href={`#${name.toLowerCase()}`} className="focus:outline-none outline-0 focus:ring-0 focus:border-b cursor-pointer focus:font-semibold hover:border-b transition-all">
      {name}
    </a>
  );
}
