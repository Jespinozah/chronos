import { Helmet } from "react-helmet-async";
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from "./PageHeader";
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';
import Users from "./Users";




function ApplicationsUserManagment() {
    return (
        <>
            <Helmet>
                <title>User Managment - Applications</title>
            </Helmet>
            <PageTitleWrapper>
                <PageHeader />
            </PageTitleWrapper>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid item xs={12}>
                        <Users />
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    );
}

export default ApplicationsUserManagment;
