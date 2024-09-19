"use client"
import { FormInputText } from '@/app/components/form/input';
import { Nullable } from '@/utils/types';
import { Button } from '@mui/material';
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

  const onSubmit: SubmitHandler<IFormInput> = useCallback((data) => {
    console.log({ person: data });
    router.push("/dashboard/person");
  }, [router])

  const handleCancel = useCallback(() => {
    router.push("/dashboard/person");
  }, [router]);
  
  return (
    <div className="w-64 min-h-64 bg-slate-50 rounded flex flex-col gap-4">
      <FormInputText name='name' control={control} label='Name' />
      <FormInputText name='age' control={control} label='Age' type='number' />
      <div className="flex gap-2 flex-row">
        <Button onClick={handleSubmit(onSubmit)} variant="contained" className="w-full font-semibold">Create</Button>
        <Button onClick={handleCancel} variant="outlined" className="w-full font-semibold">Cancel</Button>
      </div>
    </div>
  );
}