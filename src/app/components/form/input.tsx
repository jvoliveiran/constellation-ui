/* 
 * https://blog.logrocket.com/using-material-ui-with-react-hook-form/#getting-started-with-material-ui-react-hook-form
*/
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

type FormInputProps = {
  name: string,
  control: any,
  label: string,
  required?: boolean
  type?: string
}

export const FormInputText = ({ name, control, label, type = 'text', required = false }: FormInputProps): React.ReactNode => {
  let rules = {}
  if (required) rules = { ...rules, required: `${label} is required` };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          type={type}
          variant="outlined"
        />
      )}
    />
  );
};