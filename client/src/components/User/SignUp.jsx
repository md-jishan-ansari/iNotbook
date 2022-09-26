import { Button, Grid, makeStyles, TextField, Typography, IconButton, InputAdornment } from "@material-ui/core";
import { Box } from "@mui/system";
import LoginIcon from '@mui/icons-material/Login';
import VisibilityIcon from '@mui/icons-material/Visibility'; // password visibility on
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'; 
import { Link, useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import SignUpContext from "../../context/user/SignUpContext";

const useStyle = makeStyles({
    signInBox: {
        margin: "auto",
        width: "342px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", // taken from google
        borderRadius: "6px",
    },
    heading: {
        fontWeight: 600, // or bold
        marginTop: 10,
    },
    inputField: {
        margin: "3px 20px"
    },
    email: {
        width: "100%",
        margin: "15px 0 10px 0",
    },
    password: {
        width: "100%",
        margin: "10px 0 10px 0",
    },
    loginBtn: {
        backgroundColor: "rgba(48, 70, 240)",
        color: "white",
        width: "100%",
        margin: "10px 0 20px 0",
    },
    loginFooter: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "15px",
    },
    forgotPassword: {
        fontSize: 13,
        marginLeft: 17,
        color: "rgba(48, 70, 240)",
        fontWeight: 600
    },
    dontHaveAccount: {
        fontSize: 11,
        marginRight: 17,
        color: "grey",
    },
    signUp: {
        fontSize: "15px",
        color: "rgba(48, 70, 240)",
        textDecoration: "none",
        fontWeight: 600, // or bold
    }
})
const SignUp = () => {
    const classes = useStyle();
    const history = useHistory();
    const {signUp} = useContext(SignUpContext);

    const initialUserInfo = {
        name: "",
        email: "",
        password: "",
    }
    const [userInfo, setUserInfo] = useState(initialUserInfo);

    const handleChange = (event) => {
        setUserInfo({...userInfo, [event.target.name] : event.target.value })
    }

    // redirect to home page after clicking Signup button
    const signUpHandler = () => {
        signUp(userInfo);
        history.push("/");
    }
    return (
        <Grid style={{ marginTop: "55px" }} container>
            <Grid className={classes.signInBox} item>
                <Box style={{ textAlign: "center" }}>
                    <LoginIcon style={{ color: "rgba(48, 70, 240)" }} />
                    <Typography className={classes.heading} variant="h5" >Hey, Welcome back!!!</Typography>
                </Box>
                <Box className={classes.inputField}>
                    <TextField
                        className={classes.email}
                        variant="outlined"
                        label="Full Name*"
                        margin="dense" // it makes textField narrow
                        type="text"
                        name="name"
                        value= {userInfo.name}
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.email}
                        variant="outlined"
                        label="Email*"
                        margin="dense" // it makes textField narrow
                        type="email"
                        name="email"
                        value= {userInfo.email}
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.password}
                        variant="outlined"
                        label="Password*"
                        margin="dense" // it makes textField narrow
                        type="password"
                        name="password"
                        value= {userInfo.password}
                        onChange={handleChange}
                    />
                    <Button onClick={signUpHandler} className={classes.loginBtn} variant="contained" >Sign Up</Button>
                </Box>
                <Box className={classes.loginFooter}>
                    <Typography className={classes.forgotPassword}>Forgot password?</Typography>
                    <Typography className={classes.dontHaveAccount}>
                        Don't have an account ?
                        <Link className={classes.signUp} to="/user/signup"> Sign Up</Link>
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default SignUp;