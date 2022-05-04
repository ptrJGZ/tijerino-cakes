import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material/";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
// import Success from "./Success";

function Login() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(formState);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
  };

  return (
    <section style={{ width: "15%", margin: "auto" }}>
      <div style={{ textAlign: "center" }}>
        <Typography>Tijerino</Typography>
        <Typography>Cakes &amp; Pastries</Typography>
      </div>
      <form onSubmit={handleSubmit}>
        <Typography>Email</Typography>
        <TextField
          name="email"
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
          <Link to={"/success"}>Login</Link>
        </Button>
      </form>
      {error && <div>Login Failed!</div>}
    </section>
  );
}

export default Login;
