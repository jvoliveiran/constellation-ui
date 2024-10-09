"use client"

import { useQueryClient } from '@tanstack/react-query';
import { TableRow, TableCell, Table, TableBody, TableHead, Paper } from '@mui/material';
import Loading from '@/app/components/loading';
import { getRequestClient } from '@/lib/request-client';
import { useGetPerson } from '@/services/person.queries';
import ErrorMessage from '@/app/components/error-message';

type PersonViewProps = {
  id: number;
}

export default function PersonView({ id }: PersonViewProps): React.ReactNode {
  const queryClient = useQueryClient();

  const { data: person, error, isError, isPending } = useGetPerson(id, queryClient, getRequestClient());

  if(isPending) {
    return <Loading />
  }

  if(isError){
    console.error({ error });
  }

  return (
    <>
      <ErrorMessage show={isError} message={`Error on fetching person data # ${id}`} />
      <Paper className="flex flex-col mt-6">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
          <TableRow key={person.id}>
            <TableCell>{person.id}</TableCell>
            <TableCell>{person.name}</TableCell>
            <TableCell>{person.age}</TableCell>
          </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </>
  )
}