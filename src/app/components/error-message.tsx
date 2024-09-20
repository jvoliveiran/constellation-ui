import { Nullable } from '@/utils/types'
import { Alert } from '@mui/material';

type Props = {
  show: boolean,
  message: Nullable<string>
}

export default function ErrorMessage({ show, message }: Props): React.ReactNode {
  if(!show) return <></>;
  return (
    <div className="w-full mt-6">
      <Alert severity="error">{message}</Alert>
    </div>
  )
}