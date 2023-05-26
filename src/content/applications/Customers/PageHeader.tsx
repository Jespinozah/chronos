import { Typography, Button, Grid } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function PageHeader() {
  const user = {
    name: 'Pedro Monzon',
    avatar: '/static/images/avatars/3.jpg'
  };
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Customers
        </Typography>
        <Typography variant="subtitle2">
          {user.name}, 
        </Typography>
      </Grid>
      <Grid item>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
