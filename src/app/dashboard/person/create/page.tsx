import { Typography} from '@mui/material';
import PersonForm from '../components/form';

export default function CreatePerson(): React.ReactNode {
  return (
    <>
      <Typography variant="h2" className={`text-dark font-medium`}>Person</Typography>
      <PersonForm />
    </>
  )
}