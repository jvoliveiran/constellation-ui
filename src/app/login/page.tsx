import { Button, Heading, TextField } from '@radix-ui/themes';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="w-64 min-h-64 bg-slate-50 p-6 rounded flex flex-col gap-4">
      <Heading as='h1' className="text-slate-800">Login</Heading>
      <TextField.Root placeholder="Username" />
      <TextField.Root placeholder="Password" type="password" />
      <div className="w-full flex flex-row justify-between">
        <Link href="/dashboard" className="w-2/5">
          <Button className="w-full font-semibold">Login</Button>
        </Link>
        <Button variant="outline" className="w-2/5 font-semibold">Clear</Button>
      </div>
      <div className="w-full flex flex-row justify-between">
        <Button className="w-full font-semibold">Signup</Button>
      </div>
    </div>
  );
}
