"use client"
import ErrorMessage from '@/app/components/error-message';
import { FormInputText } from '@/app/components/form/input';
import { getRequestClient } from '@/lib/request-client';
import { useCreatePerson } from '@/services/person.mutations';
import { Nullable } from '@/utils/types';
import { Button } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

type IFormInput = {
  name: string;
  age: Nullable<number>;
}

export default function FormPerson(): React.ReactNode {
  const router = useRouter();
  const { handleSubmit, control } = useForm({ defaultValues: {
    age: null,
    name: '',
  }});

  const queryClient = useQueryClient();
  const { mutate, isError, error } = useCreatePerson(queryClient, getRequestClient());

  const onSubmit: SubmitHandler<IFormInput> = ({name, age}) => {
    console.log({ person: { name, age } });
    mutate({ name, age: Number.parseInt(`${age}`) | 1});
    if(isError)
      console.error('Failed to create a person', error?.message)

    router.push("/dashboard/person");
  }

  const handleCancel = useCallback(() => {
    router.push("/dashboard/person");
  }, [router]);
  
  return (
    <div className="flex flex-col gap-2">
      <ErrorMessage show={isError} message='Error creating person' />
      <div className="w-80 min-h-64 bg-slate-50 rounded flex flex-col gap-4">
        <FormInputText name='name' control={control} label='Name' required />
        <FormInputText name='age' control={control} label='Age' type='number' required />
        <div className="flex gap-2 flex-row">
          <Button onClick={handleSubmit(onSubmit)} variant="contained" className="w-full font-semibold">Create</Button>
          <Button onClick={handleCancel} variant="outlined" className="w-full font-semibold">Cancel</Button>
        </div>
      </div>
    </div>
  );
}