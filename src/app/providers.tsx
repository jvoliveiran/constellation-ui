"use client"

import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import client, { localStoragePersister } from '@/lib/react-query-client';
import { Theme } from '@radix-ui/themes';

export interface ProvidersProps {
	children: React.ReactNode;
}

export const persistOptions = {
	persister: localStoragePersister
}

export function Providers({ children }: ProvidersProps) {
	return (
    <Theme accentColor="blue" grayColor="slate" appearance="light">
		  <PersistQueryClientProvider 
				client={client}
				persistOptions={persistOptions}
			>
        {children}
		  </PersistQueryClientProvider>
    </Theme>
	);
}