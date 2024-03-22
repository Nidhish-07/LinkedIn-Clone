import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider,database } from "../firebase/setup";
import { addDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
  const [username, setUsername] = React.useState("");
  const addUser = async () => {
    const userRef=collection(database,"Users")
    try {
      await addDoc(userRef,{
        username:username
      });
    } catch (err) {
      console.log(err);
    }
  };
  const signInWithGoogle = async () => {
    !username && toast.warning("Please enter username")
    try {
      username && await signInWithPopup(auth, googleAuthProvider);
      username && addUser()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={6} sx={{ paddingLeft: "80px", paddingTop: "15px" }}>
        <ToastContainer autoClose={2000} position="top-right"/>
          <LinkedInIcon />

          <h2 style={{ fontWeight: "100", fontSize: "60px", color: "#b26f28" }}>
            Find jobs through this website
          </h2>
          <label style={{ color: "grey" }}>Enter username</label>
          <br />
          <TextField
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined"
            label="Username"
            sx={{ width: "400px", mt: "5px" }}
          />
          <br />
          <Button
            onClick={signInWithGoogle}
            size="large"
            variant="contained"
            sx={{
              width: "400px",
              borderRadius: "50px",
              mt: "25px",
              height: "50px",
            }}
          >
            SignIn
          </Button>
        </Grid>
        <Grid item xs={6}>
          <IntegrationInstructionsIcon />
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
