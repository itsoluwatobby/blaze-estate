import { createContext, useState } from 'react';

export const AppContext = createContext<AppContextProps | null>(null);

export const AppContextDataProvider = (
  { children }: { children: React.ReactNode },
) => {
  const [theme, setTheme] = useState<Theme>(
    window.matchMedia
      && window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches ? 'dark' : 'light'
  );
  
  const value = {
    theme, setTheme,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
