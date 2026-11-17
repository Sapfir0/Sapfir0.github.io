import { Button, Typography } from '@mui/material';
import { Link } from 'react-router';

export function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: 96 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Page not found
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        The page you are looking for does not exist.
      </Typography>
      <Link to="/">
        <Button variant="contained">Back to home</Button>
      </Link>
    </div>
  );
}
