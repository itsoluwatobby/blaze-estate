
type TabNameProp = {
  nav: NavProps;
}

export const TabName = ({ nav }: TabNameProp) => {

  return (
    <a href={nav.link} className="focus:outline-none outline-0 focus:ring-0 focus:border-b cursor-pointer focus:font-semibold hover:border-b transition-all">
      {nav.name}
    </a>
  );
}