import { QueryClient, QueryClientConfig } from '@tanstack/react-query';

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

const queryClient = new QueryClient(queryClientConfig);

export default queryClient;