import React from "react";
import { Typography, TextField, Button } from "@mui/material/";

function Login() {
  return (
    <section style={{ width: "15%", margin: "auto" }}>
      <div style={{ textAlign: "center" }}>
        <Typography>Tijerino</Typography>
        <Typography>Cakes &amp; Pastries</Typography>
      </div>
      <form>
        <Typography>Username</Typography>
        <TextField size="small" fullWidth />
        <Typography>Password</Typography>
        <TextField size="small" fullWidth />
        <Button variant="contained">Login</Button>
      </form>
    </section>
  );
}

export default Login;
