import { Typography} from '@mui/material';
import PersonList from './list';

export default function Person(): React.ReactNode {
  return (
    <>
      <Typography variant="h2" className={`text-dark font-medium`}>Person</Typography>
      <PersonList />
    </>
  )
}