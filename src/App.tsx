import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      sx={{
        height: '100vh',
        backgroundColor: '#121212'
      }}
    >
      <Typography variant="h4" sx={{ color: '#fff', marginBottom: 2 }}>
        Counter: {counter}
      </Typography>
      <Button
        onClick={() => setCounter(counter + 1)}
        variant="contained"
        sx={{
          backgroundColor: 'green'
        }}
      >
        +1
      </Button>
    </Box>
  );
}
