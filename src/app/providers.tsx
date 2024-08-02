"use client"

import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import client, { localStoragePersister } from '@/lib/react-query-client';
import { ThemeProvider, createTheme, alpha, getContrastRatio } from '@mui/material/styles';

export interface ProvidersProps {
	children: React.ReactNode;
}

export const persistOptions = {
	persister: localStoragePersister
}

// Augment the palette to include a violet color
declare module '@mui/material/styles' {
  interface Palette {
    violet: Palette['primary'];
  }

  interface PaletteOptions {
    violet?: PaletteOptions['primary'];
  }
}

// Update the Button's color options to include a violet option
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    violet: true;
  }
}

const violetBase = '#7F00FF';
const violetMain = alpha(violetBase, 0.9);

export function Providers({ children }: ProvidersProps) {
	const theme = createTheme({ 
		palette: {
			primary: {
				main: '#000000', //#003153
			},
			secondary: {
				main: '#FFFFFF' //#64CCC5
			},
			violet: {
				main: violetMain,
				light: alpha(violetBase, 0.5),
				dark: alpha(violetBase, 0.98),
				contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
			},
		}
	});
	return (
    <ThemeProvider theme={theme}>
		  <PersistQueryClientProvider 
				client={client}
				persistOptions={persistOptions}
			>
        {children}
		  </PersistQueryClientProvider>
    </ThemeProvider>
	);
}