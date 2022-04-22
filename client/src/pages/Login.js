import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material/";
// import Success from "./Success";

function Login() {
  const [user, setUser] = useState({});

  const handleSubmit = () => {
    console.log(user);
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <section style={{ width: "15%", margin: "auto" }}>
      <div style={{ textAlign: "center" }}>
        <Typography>Tijerino</Typography>
        <Typography>Cakes &amp; Pastries</Typography>
      </div>
      <form onSubmit={handleSubmit}>
        <Typography>Username</Typography>
        <TextField
          name="username"
          size="small"
          fullWidth
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <Typography>Password</Typography>
        <TextField
          name="password"
          size="small"
          fullWidth
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </section>
  );
}

export default Login;
