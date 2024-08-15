import { GetAllDocument } from '@/graphql/generated/graphql';
import { useQuery } from '@tanstack/react-query';

export const usePerson = (reactQueryClient, gqlRequestClient) => {
  const { data, error, isError, isPending } = useQuery({
    queryKey: ['people'],
    queryFn: () => gqlRequestClient.request(GetAllDocument),
    staleTime: 0.5 * 60 * 1000 //Overwriting default staleTime to 30sec
  }, reactQueryClient);
  return  { data, error, isError, isPending };
}