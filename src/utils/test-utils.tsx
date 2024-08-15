import { theme } from '@/app/config/theme';
import { ThemeProvider } from '@mui/material/styles';
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
    <ThemeProvider theme={theme}>
		  <QueryClientProvider client={client}>
        {children}
		  </QueryClientProvider>
    </ThemeProvider>
  );
};

const renderWithProviders = (children: ReactNode, reactQueryClient?: QueryClient) => {
  return render(children, { wrapper: Wrapper });
}

export default renderWithProviders;