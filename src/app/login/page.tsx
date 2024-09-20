'use client'
import { Typography, Button } from '@mui/material';

import { SubmitHandler, useForm } from 'react-hook-form';
import { FormInputText } from '../components/form/input';
import { useRouter } from 'next/navigation';

type IFormInput = {
  username: string;
  password: string;
}


export default function Login() {
  const router = useRouter();
  
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  // TODO: Add login logic
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log({ login: data });
    router.push("/dashboard");
  }


  return (
    <div className="w-64 min-h-64 bg-slate-50 p-6 rounded flex flex-col gap-4">
      <Typography variant="h4" className="text-slate-800">Login</Typography>
      <FormInputText name='username' control={control} label='Username' />
      <FormInputText name='password' control={control} label='Password' type='password' />
      <div className="w-full flex flex-row justify-between">
        <div className="w-2/5">
          <Button onClick={handleSubmit(onSubmit)} variant="contained" className="w-full font-semibold">Login</Button>
        </div>
        <Button variant="outlined" className="w-2/5 font-semibold">Clear</Button>
      </div>
      <div className="w-full flex flex-row justify-between">
        <Button variant="contained" className="w-full font-semibold">Signup</Button>
      </div>
    </div>
  );
}
