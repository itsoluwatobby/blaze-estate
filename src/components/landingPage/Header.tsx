import { NavigationNames } from "../../utils";

export default function Header() {

  return (
    <header className="sticky z-50 bg-white w-full top-0 shadow-sm py-3 px-7 flex justify-between h-14 items-center">

      <h1 className="font-semibold text-base">Blazer</h1>

      <div className="flex items-center gap-x-3 text-[13px] font-medium">
        <div className="self-en flex items-center gap-x-2 font-medium">
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

    </header>
  )
}


type TabNameProp = {
  name: string;
}

const TabName = ({ name }: TabNameProp) => {

  return (
    <button className="focus:outline-none outline-0 focus:ring-0 focus:border-b focus:font-semibold hover:border-b transition-all">
      {name}
    </button>
  );
}
