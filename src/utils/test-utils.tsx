import { Theme } from '@radix-ui/themes';
import { QueryClient, QueryClientConfig, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { FunctionComponent, PropsWithChildren, ReactNode } from 'react';

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1 * 60 * 1000, //Default all queries: 1 minute
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
}

type WrapperProps = {
  queryClient?: QueryClient
}

const Wrapper: FunctionComponent<PropsWithChildren<WrapperProps>> = ({ children, queryClient }) => {
  const client = queryClient ?? new QueryClient(queryClientConfig);
  return (
    <Theme accentColor="blue" grayColor="slate" appearance="light">
		  <QueryClientProvider client={client}>
        {children}
		  </QueryClientProvider>
    </Theme>
  );
};

const renderWithProviders = (children: ReactNode, reactQueryClient?: QueryClient) => {
  return render(children, { wrapper: Wrapper });
}

export default renderWithProviders;