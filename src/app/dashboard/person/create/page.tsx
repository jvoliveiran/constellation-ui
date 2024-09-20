import { Typography} from '@mui/material';
import PersonForm from '../components/form';
import Center from '@/app/components/center';

export default function CreatePerson(): React.ReactNode {
  return (
    <>
      <Typography variant="h2" className="text-dark font-medium">Person</Typography>
      <Typography variant="h4" className="text-dark font-medium pt-2">Create</Typography>
      <div className="flex pt-12 items-center justify-center">
        <PersonForm />
      </div>
    </>
  )
}