import { QueryClient, QueryClientConfig } from '@tanstack/react-query';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

const MINUTE = 60 * 1000;

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1 * MINUTE, //Default all queries: 1 minute
      gcTime: 10 * MINUTE,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
}

const queryClient = new QueryClient(queryClientConfig);

export const localStoragePersister = createSyncStoragePersister({
  storage: typeof window !== 'undefined' ? window.localStorage : undefined,
})

export default queryClient;