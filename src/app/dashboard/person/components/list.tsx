"use client"

import { useCallback, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { TableRow, TableCell, Table, TableBody, TableHead, TableContainer, Paper } from '@mui/material';
import Loading from '@/app/components/loading';
import { GetAllQuery } from '@/graphql/generated/graphql';
import { getRequestClient } from '@/lib/request-client';
import { usePerson } from '@/services/person.queries';
import { usePersonActions, usePersonData } from '@/stores/person.store';
import ErrorMessage from '@/app/components/error-message';
import { useRouter } from 'next/navigation';

export default function PersonList(): React.ReactNode {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { data, error, isError, isPending } = usePerson(queryClient, getRequestClient());
  const { addPerson } = usePersonActions();
  const personStore = usePersonData();

  const goToView = useCallback((id: number) => {
    router.push(`/dashboard/person/${id}`);
  }, [router]);
  
  useEffect(() => {
    if(data) {
      addPerson(data.getAll);
    } 
  }, [addPerson, data]);

  if(isPending) {
    return <Loading />
  }

  const getPageContent = (data: GetAllQuery) => {
    if(isPending || isError) return <></>
    if(!data && !isError) return (
      <TableRow>
        <TableCell colSpan={3}>No results found</TableCell>
      </TableRow>
    )

    return <>{data.getAll.map(person => {
      return (
        <TableRow
          className="hover:bg-gray-100 hover:cursor-pointer"
          key={person.id} 
          onClick={() => goToView(person.id)}
        >
          <TableCell size="small">{person.id}</TableCell>
          <TableCell>{person.name}</TableCell>
          <TableCell>{person.age}</TableCell>
        </TableRow>
      )
    })}</>
  }

  return (
    <>
      <ErrorMessage show={isError} message='Error on fetching person data' />
      <div className="flex flex-col mt-6">
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell className="font-semibold bg-gray-100" size="small">ID</TableCell>
                <TableCell className="font-semibold bg-gray-100">Name</TableCell>
                <TableCell className="font-semibold bg-gray-100">Age</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {getPageContent(data)}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}