"use client"

import { ThemeProvider } from '@mui/material/styles';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import client, { localStoragePersister } from '@/lib/react-query-client';
import { theme } from './config/theme';


export interface ProvidersProps {
	children: React.ReactNode;
}

export const persistOptions = {
	persister: localStoragePersister
}

export function Providers({ children }: ProvidersProps) {
	
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