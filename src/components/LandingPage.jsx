import React from 'react';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import main from '../Images/main.png'
import profile from '../Images/profile.png'
import home from '../Images/home.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(4),
    },
    hero: {
        textAlign: 'center',
        marginBottom: theme.spacing(4),
    },
    image: {
        width: '100%',
        borderRadius: theme.shape.borderRadius,
    },
    button: {
        marginTop: theme.spacing(2),
    },
    feature: {
        padding: theme.spacing(2),
    },
    section: {
        marginTop: theme.spacing(6),
    },
    testimonial: {
        padding: theme.spacing(3),
        margin: theme.spacing(2, 0),
    },
}));

const LandingPage = () => {
    const classes = useStyles();
    const images = {
        park: main,
        navigation: profile,
        otp: home,
    };

    return (
        <Container className={classes.root}>
            <div className={classes.hero}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Welcome to Parkkey
                </Typography>
                <Typography variant="h5" component="p" gutterBottom>
                    Find and manage your parking with ease.
                </Typography>
                <Button variant="contained" color="primary" className={classes.button}>
                    Download App
                </Button>
            </div>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <img src={images.park} alt="Parking" className={classes.image} />
                </Grid>
                <Grid item xs={12} md={6} className={classes.feature}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Find Nearest Parking
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        Use our app to locate the nearest parking spots in your city and navigate there effortlessly.
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6} className={classes.feature}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Easy Navigation
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        Our integrated map and navigation feature ensures you reach your parking spot without any hassle.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={images.navigation} alt="Navigation" className={classes.image} />
                </Grid>

                <Grid item xs={12} md={6}>
                    <img src={images.otp} alt="OTP" className={classes.image} />
                </Grid>
                <Grid item xs={12} md={6} className={classes.feature}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Secure Exit
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        Use an OTP or customer QR code to securely exit the parking lot, ensuring a smooth and safe experience.
                    </Typography>
                </Grid>
            </Grid>

            <div className={classes.section}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Parking Availability
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    Check real-time parking availability in your area to find the best spot without wasting time.
                </Typography>
            </div>

            <div className={classes.section}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Convenient Payment Options
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    Pay for your parking using a variety of methods including credit/debit cards, mobile wallets, and more.
                </Typography>
            </div>

            <div className={classes.section}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Enhanced Security Features
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    Our parking facilities are equipped with CCTV cameras, secure entry/exit points, and 24/7 security to ensure the safety of your vehicle.
                </Typography>
            </div>

            <div className={classes.section}>
                <Typography variant="h4" component="h2" gutterBottom>
                    User Testimonials
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Paper className={classes.testimonial}>
                            <Typography variant="body1" component="p" gutterBottom>
                                "Parkkey made finding a parking spot so easy! The app's navigation feature is a lifesaver." - Sarah
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper className={classes.testimonial}>
                            <Typography variant="body1" component="p" gutterBottom>
                                "I love the secure exit feature. Knowing my car is safe gives me peace of mind." - John
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper className={classes.testimonial}>
                            <Typography variant="body1" component="p" gutterBottom>
                                "The payment options are very convenient. I can pay directly from my phone." - Emma
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
};

export default LandingPage;
