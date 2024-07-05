"use client"

import { QueryClientProvider  } from '@tanstack/react-query';
import client from '@/lib/react-query-client';
import { Theme } from '@radix-ui/themes';

export interface ProvidersProps {
	children: React.ReactNode;

}

export function Providers({ children }: ProvidersProps) {
	return (
    <Theme accentColor="blue" grayColor="slate" appearance="light">
		  <QueryClientProvider client={client}>
        {children}
		  </QueryClientProvider>
    </Theme>
	);
}