"use client"

import { Maybe, GetAllQuery } from '@/graphql/generated/graphql';
import { useQueryClient } from '@tanstack/react-query';
import { getRequestClient } from '@/lib/request-client';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import { usePerson } from '@/services/person.queries';
import { usePersonData, usePersonActions } from '@/stores/person.store';
import { useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography, Alert} from '@mui/material';


export default function Person(): React.ReactNode {
  const queryClient = useQueryClient();

  const { isPending, isError, data, error } = usePerson(queryClient, getRequestClient());
  const { addPerson } = usePersonActions();
  const personStore = usePersonData();

  console.log({ personStore });
  
  useEffect(() => {
    if(data) {
      addPerson(data.getAll);
    } 
  }, [addPerson, data]);

  const getPageContent = (loading: boolean, isError: boolean, data: GetAllQuery | undefined) => {
    if(isError || loading) return
    if(!data) return (
      <TableRow>
        <TableCell>No results found</TableCell>
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

  const getErrorContent = (isError: boolean, error: Maybe<Error>) => {
    if (!isError) return;
    console.error('Error fetching people', error);
    return (
      <div className='mt-6'>
        <Alert icon={<RotateRightIcon fontSize="inherit" />} severity="error">
          {`Error fetching data`}
        </Alert>
      </div>
    );
  }

  const showLoading = (isPending: boolean) => {
    if(isPending) return (
      <div className="flex justify-center items-center">
        <RotateRightIcon />
      </div>
    )
  }

  return (
    <>
      <Typography variant="h2" className="text-dark font-medium">Person</Typography>
      {getErrorContent(isError, error)}
      {showLoading(isPending)}
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
            {getPageContent(isPending, isError, data)}
          </TableBody>
        </Table>
      </div>
    </>
  )
}