import { Button, Typography } from '@mui/material';
import PersonList from './components/list';
import Link from 'next/link';

export default function Person(): React.ReactNode {
  return (
    <>
      <Typography variant="h2" className={`text-dark font-medium`}>Person</Typography>
      <div className="flex flex-row-reverse">
        <Link href="/dashboard/person/create">
          <Button variant="contained">Create</Button>
        </Link>
      </div>
      <PersonList />
    </>
  )
}