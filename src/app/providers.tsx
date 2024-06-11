"use client"

import { ApolloProvider } from '@apollo/client';
import client from './lib/apollo-client';
import { Theme } from '@radix-ui/themes';

export interface ProvidersProps {
	children: React.ReactNode;

}

export function Providers({ children }: ProvidersProps) {
	return (
    <Theme accentColor="blue" grayColor="slate" appearance="light">
		  <ApolloProvider client={client}>
        {children}
		  </ApolloProvider>
    </Theme>
	);
}