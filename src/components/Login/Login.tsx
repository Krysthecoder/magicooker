import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {
  Box,
  Checkbox,
  Typography,
  Link,
  Stack,
  Button,
} from '@mui/material/';

import CustomTextFieldGroup from '../CustomTextFieldGroup/CustomTextFieldGroup';
import { LoginTextFields } from './LoginTextFieldsData';

const preventDefault = (event: React.SyntheticEvent) =>
  event.preventDefault();

const Login = () => {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
      noValidate
      autoComplete="off"
      onClick={preventDefault}
    >
      <Stack
        spacing={2}
        direction="column"
      >
        <Typography variant="h5">Sign In</Typography>
        {LoginTextFields.map((textField) => {
          return <CustomTextFieldGroup {...textField} />;
        })}
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Remember Me"
          />
        </FormGroup>
        <Button variant="contained">Submit</Button>
        <Link variant="body2" href="#">
          Forgot password?
        </Link>
      </Stack>
    </Box>
  );
};

export default Login;
