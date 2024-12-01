/// <reference types="types.d.ts" />

type CurrencyType = 'EURO' | 'NAIRA' | 'DOLLAR';

type ScrollDirection = 'left' | 'right'

type Theme = 'light' | 'dark'
type AppContextProps = {
  appName: string;
  theme: Theme;
  toggleModal: boolean;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

type User = {
  firstName: string;
  lastName: string;
  picture: null;
  email: string;
  cardNumber: string;
  expires: string;
}

type InputType = 'text' | 'number' | 'checkbox' | 'numeric' | 'date'

type Inputs = {
  checkIn: string,
  checkOut: string,
  guests: string,
}

type NavProps = {
  name: string;
  link: string;
}

type SocialProps = {
  id: number;
  Icon: IconType;
  link: string;
  name: string;
}

type IntersectingProp = {
  isIntersecting: boolean;
  node: Element;
}