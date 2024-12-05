import TextField, {
  TextFieldVariants,
} from '@mui/material/TextField';
import { LoginTextFieldProps } from '../types';

const CustomTextFieldGroup = ({
  id,
  label,
  variant,
  type,
}: LoginTextFieldProps) => {
  return (
    <TextField
      id={id}
      label={label}
      variant={variant as TextFieldVariants}
      type={type}
    />
  );
};

export default CustomTextFieldGroup;
