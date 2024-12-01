import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext<AppContextProps | null>(null);

export const AppContextDataProvider = (
  { children }: { children: React.ReactNode },
) => {
  const [appName] = useState('Blazer');
  const [toggleModal, setToggleModal] = useState(false);
  const [theme, setTheme] = useState<Theme>(
    window.matchMedia
      && window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches ? 'dark' : 'light'
  );
  
  const value = {
    theme, setTheme, appName, toggleModal, setToggleModal,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
