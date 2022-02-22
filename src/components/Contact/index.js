import React from "react";
import { Typography, TextField, Grid, Button } from "@mui/material";

function Contact() {
  return (
    <div style={{ paddingBottom: "32px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "16px",
        }}
      >
        <Typography
          variant="h2"
          style={{
            textAlign: "center",
            padding: "0px 32px 4px 32px",
            borderBottom: "3px solid pink",
          }}
        >
          Contact Us
        </Typography>
      </div>
      <div style={{ margin: "auto", width: "50%" }}>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Typography>First Name</Typography>
            <TextField fullWidth size="small" />
          </Grid>
          <Grid item lg={6}>
            <Typography>Last Name</Typography>
            <TextField fullWidth size="small" />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Typography>Email</Typography>
            <TextField fullWidth size="small" />
          </Grid>
          <Grid item lg={6}>
            <Typography>Phone</Typography>
            <TextField fullWidth size="small" />
          </Grid>
        </Grid>
        <Grid>
          <Typography>Message</Typography>
          <TextField fullWidth size="small" />
        </Grid>
        <Grid container justifyContent="center">
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </div>
    </div>
  );
}

export default Contact;
