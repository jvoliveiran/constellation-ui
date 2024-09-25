import { Divider, Typography } from '@mui/material';
import PersonView from '../components/view';
import Breadcrumb from '@/app/components/breadcrumb';
import Header from '@/app/components/header';

export default function ViewPerson({ params }): React.ReactNode {
  const { id } = params;
  return (
    <>
      <Header
        title="Person"
        subtitle={`# ${id}`}
      />
      <PersonView id={id} />
    </>
  )
}