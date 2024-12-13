import {
  Box,
  Checkbox,
  Typography,
  Link,
  Stack,
  Button,
  FormGroup,
  FormControlLabel,
} from '@mui/material/';
import CustomTextFieldGroup from '../CustomTextFieldGroup/CustomTextFieldGroup';
import { LoginTextFields } from './AuthTextFieldsData';

const Login = ({ onClose }: { onClose: () => void }) => {
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
      noValidate
      autoComplete="off"
      onClick={preventDefault}
    >
      <Stack spacing={2} direction="column">
        <Typography variant="h5">Sign In</Typography>
        {LoginTextFields.map((textField) => (
          <CustomTextFieldGroup {...textField} />
        ))}
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Remember Me" />
        </FormGroup>
        <Button variant="contained" onClick={onClose}>
          Submit
        </Button>
        <Link variant="body2" href="#">
          Forgot password?
        </Link>
      </Stack>
    </Box>
  );
};

export default Login;
