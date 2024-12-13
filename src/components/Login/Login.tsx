import { useState } from 'react';
import {
  Box,
  Checkbox,
  Typography,
  Link,
  Stack,
  Button,
  FormGroup,
  FormControlLabel,
  Modal
} from '@mui/material/';
import CustomTextFieldGroup from '../CustomTextFieldGroup/CustomTextFieldGroup';
import { LoginTextFields, SignUpTextFields } from './AuthTextFieldsData';

interface AuthModalProps {
  onClose: () => void;
  open: boolean;
}

const Login = ({ onClose, open }: AuthModalProps) => {

  const [isSignUp, setIsSignUp] = useState(false);
  const handleToggle = () => setIsSignUp((prev) => !prev);
  const textFields = isSignUp ? SignUpTextFields : LoginTextFields;
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        component="form"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          p: 4,
          boxShadow: 24,
          borderRadius: 2,
          '& > :not(style)': { m: 1, width: '35ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={preventDefault}
      >
        <Stack spacing={2} direction="column">
          <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
          {textFields.map((textField) => (
            <CustomTextFieldGroup key={textField.id} {...textField} />
          ))}
          {isSignUp && (
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="I agree to the terms and conditions"
              />
            </FormGroup>
          )}
          <Button variant="contained" type="submit">
            Submit
          </Button>
          <Link variant="body2" onClick={handleToggle} sx={{ cursor: 'pointer' }}>
            {isSignUp ? 'Already have an account? Sign In' : 'Don’t have an account? Sign Up'}
          </Link>
        </Stack>
      </Box>
    </Modal>
  );
};

export default Login;
