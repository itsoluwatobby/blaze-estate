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

export const NavigationNames = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Services', link: '#services' },
  { name: 'Gallery', link: '#gallery' },
] as const;

export const NavigationRoutes = [
  { name: 'About', link: '#about' },
  { name: 'Services', link: '#services' },
  { name: 'Profile', link: '#profile' },
  { name: 'Gallery', link: '#gallery' },
  { name: 'Contact', link: '#contact' },
];

export const ActionRoutes = [
  { name: 'Privacy Policy', link: '#privacy' },
  { name: 'Terms of Services', link: '#termsOfServices' },
  { name: 'Cookies Settings', link: '#cookiesSettings' },
];
