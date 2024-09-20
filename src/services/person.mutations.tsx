import { CreatePersonDocument, CreatePersonInput } from '@/graphql/generated/graphql';
import { useMutation } from '@tanstack/react-query';

export const useCreatePerson = (reactQueryClient, gqlRequestClient) => {
  const { mutate, isError, isPending, isSuccess, error } = useMutation({
    mutationFn: (personInput: CreatePersonInput) => gqlRequestClient.request(CreatePersonDocument, { person: personInput }),
  }, reactQueryClient);

  return { mutate, isError, isPending, isSuccess, error };
}