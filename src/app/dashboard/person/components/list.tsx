"use client"

import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { TableRow, TableCell, Table, TableBody, TableHead, Alert } from '@mui/material';
import Loading from '@/app/components/loading';
import { GetAllQuery } from '@/graphql/generated/graphql';
import { getRequestClient } from '@/lib/request-client';
import { usePerson } from '@/services/person.queries';
import { usePersonActions, usePersonData } from '@/stores/person.store';
import ErrorMessage from '@/app/components/error-message';

export default function PersonList(): React.ReactNode {
  const queryClient = useQueryClient();

  const { data, error, isError, isPending } = usePerson(queryClient, getRequestClient());
  const { addPerson } = usePersonActions();
  const personStore = usePersonData();
  
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
        <TableRow key={person.id}>
          <TableCell>{person.id}</TableCell>
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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {getPageContent(data)}
          </TableBody>
        </Table>
      </div>
    </>
  )
}