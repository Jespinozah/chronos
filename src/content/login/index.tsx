import { Box, Container, Card, Button, Grid, Typography, TextField } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import Logo from 'src/components/LogoSign';

import { Link as RouterLink } from 'react-router-dom';

import { styled } from '@mui/material/styles';


function Overview() {
    return (
        <Container component="main" maxWidth="xs">
            <Helmet>
                <title>Tokyo Free White React Typescript Admin Dashboard</title>
            </Helmet>
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                <Box component="form" sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        id="outlined-username-input"
                        fullWidth
                        label="username"
                        type="text"
                        autoComplete="current-username"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        id="outlined-password-input"
                        fullWidth
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        autoFocus
                    />
                    <Button
                        component={RouterLink}
                        to="/dashboards/general"
                        size="large"
                        variant="contained"
                        fullWidth
                    >
                        Login
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <p>
                                Forgot password?
                            </p>
                        </Grid>
                        <Grid item>
                            <p>
                                {"Don't have an account? Sign Up"}
                            </p>
                        </Grid>
                    </Grid>

                </Box>

            </Box>
        </Container>
    );
}

export default Overview;
