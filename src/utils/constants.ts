export enum CURRENCY {
  EURO = "£",
  NAIRA = "₦",
  DOLLAR = "$",
};

export enum TransactionStatus {
  Failed = 'Failed',
  Pending = 'Pending',
  Success = 'Success',
}

export const NavigationNames = {
  Home: 'Home',
  About: 'About',
  Services: 'Services',
  Gallery: 'Gallery',
} as const;
