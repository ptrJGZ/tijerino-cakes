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
        <Grid
          container
          rowSpacing={1}
          columnSpacing={2}
          style={{ paddingBottom: "16px" }}
        >
          <Grid item lg={6}>
            <Typography>First Name</Typography>
            <TextField fullWidth size="small" />
          </Grid>
          <Grid item lg={6}>
            <Typography>Last Name</Typography>
            <TextField fullWidth size="small" />
          </Grid>
          <Grid item lg={6}>
            <Typography>Email</Typography>
            <TextField fullWidth size="small" />
          </Grid>
          <Grid item lg={6}>
            <Typography>Phone</Typography>
            <TextField fullWidth size="small" />
          </Grid>
          <Grid item lg={12}>
            <Typography>Message</Typography>
            <TextField fullWidth size="small" />
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end">
          <Button
            variant="contained"
            style={{ backgroundColor: "pink", color: "black" }}
          >
            Submit
          </Button>
        </Grid>
      </div>
    </div>
  );
}

export default Contact;
