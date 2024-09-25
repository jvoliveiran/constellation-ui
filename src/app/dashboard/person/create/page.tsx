import { Divider, Typography} from '@mui/material';
import PersonForm from '../components/form';
import Header from '@/app/components/header';

export default function CreatePerson(): React.ReactNode {
  return (
    <>
      <Header title="Person" subtitle="Create" />
      <div className="flex pt-12 items-center justify-center">
        <PersonForm />
      </div>
    </>
  )
}