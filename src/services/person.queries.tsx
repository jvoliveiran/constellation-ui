import { GetAllDocument, GetOneDocument } from '@/graphql/generated/graphql';
import { useQuery } from '@tanstack/react-query';

export const usePerson = (reactQueryClient, gqlRequestClient) => {
  const { data, error, isError, isPending } = useQuery({
    queryKey: ['people'],
    queryFn: () => gqlRequestClient.request(GetAllDocument),
    staleTime: 0.5 * 60 * 1000 //Overwriting default staleTime to 30sec
  }, reactQueryClient);
  return  { data, error, isError, isPending };
}

export const useGetPerson = (personId: number, reactQueryClient, gqlRequestClient) => {
  const { data, error, isError, isPending } = useQuery({
    queryKey: ['person', personId],
    queryFn: () => gqlRequestClient.request(GetOneDocument, { getOneId: Number.parseInt(`${personId}`) }),
    staleTime: 0.5 * 60 * 1000 //Overwriting default staleTime to 30sec
  }, reactQueryClient);
  return  { data: data?.getOne, error, isError, isPending };
}