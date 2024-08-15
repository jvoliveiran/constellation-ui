import { Typography, TextField, Button } from '@mui/material';

import Link from 'next/link';

export default function Login() {
  return (
    <div className="w-64 min-h-64 bg-slate-50 p-6 rounded flex flex-col gap-4">
      <Typography variant="h4" className="text-slate-800">Login</Typography>
      <TextField id="username" label="Username" />
      <TextField id="password" label="Password" type="password" />
      <div className="w-full flex flex-row justify-between">
        <Link href="/dashboard" className="w-2/5">
          <Button variant="contained" className="w-full font-semibold">Login</Button>
        </Link>
        <Button variant="outlined" className="w-2/5 font-semibold">Clear</Button>
      </div>
      <div className="w-full flex flex-row justify-between">
        <Button variant="contained" className="w-full font-semibold">Signup</Button>
      </div>
    </div>
  );
}
