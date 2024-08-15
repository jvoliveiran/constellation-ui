import { CircularProgress } from '@mui/material';
import Center from './center';

function Loading (): React.ReactNode {
  return (
    <Center>
      <CircularProgress />
    </Center>
  )
}

export default Loading;