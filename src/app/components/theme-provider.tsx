'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ClientOnly } from './client-only';
import React from 'react';

interface IThemeProviderProps {
  children: React.ReactNode;
  attribute: string;
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export const ThemeProvider = ({ children, attribute = 'class', defaultTheme = "system", enableSystem = true, disableTransitionOnChange = false}: IThemeProviderProps) => {
  return (
    <ClientOnly>
      <NextThemesProvider
        attribute={attribute as 'class' | 'data-theme'}
        defaultTheme={defaultTheme}
        enableSystem = {enableSystem}
        disableTransitionOnChange={disableTransitionOnChange}
      > 
        {children}
      </NextThemesProvider>
    </ClientOnly>
  );
};
