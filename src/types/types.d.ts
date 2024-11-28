/// <reference types="types.d.ts" />

type CurrencyType = 'EURO' | 'NAIRA' | 'DOLLAR';

type Theme = 'light' | 'dark'
type AppContextProps = {
  appName: string;
  theme: Theme;
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
