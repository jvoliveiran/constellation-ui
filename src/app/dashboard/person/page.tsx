import { Button, Typography, Divider } from '@mui/material';
import PersonList from './components/list';
import Link from 'next/link';
import Breadcrumb from '@/app/components/breadcrumb';
import Header from '@/app/components/header';

export default function Person(): React.ReactNode {

  const actions = () => (
    <div className="flex flex-row-reverse">
      <Link href="/dashboard/person/create">
        <Button variant="contained">Create</Button>
      </Link>
    </div>
  )

  return (
    <>
      <Header
        title="Person"
        actions={actions}
      />
      <PersonList />
    </>
  )
}