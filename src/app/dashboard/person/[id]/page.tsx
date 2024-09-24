import { Button, Typography } from '@mui/material';
import Link from 'next/link';
import PersonView from '../components/view';

export default function ViewPerson({ params }): React.ReactNode {
  const { id } = params;
  return (
    <>
      <Typography variant="h2" className={`text-dark font-medium`}>Person</Typography>
      <Typography variant="h4" className="text-dark font-medium pt-2"># {id}</Typography>
      <PersonView id={id} />
    </>
  )
}