import React, { useRef } from "react";
import { Typography, TextField, Grid, Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import { emailConfig } from "../../constants/emailConfiguration";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailConfig.SERVICE_ID,
        emailConfig.TEMPLATE_ID,
        form.current,
        emailConfig.USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form style={{ marginBottom: "32px" }} ref={form} onSubmit={sendEmail}>
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
            <TextField name="first_name" type="text" fullWidth size="small" />
          </Grid>
          <Grid item lg={6}>
            <Typography>Last Name</Typography>
            <TextField name="last_name" type="text" fullWidth size="small" />
          </Grid>
          <Grid item lg={6}>
            <Typography>Email</Typography>
            <TextField name="email" type="email" fullWidth size="small" />
          </Grid>
          <Grid item lg={6}>
            <Typography>Phone</Typography>
            <TextField name="phone" type="tel" fullWidth size="small" />
          </Grid>
          <Grid item lg={12}>
            <Typography>Address</Typography>
            <TextField name="address" type="text" fullWidth size="small" />
          </Grid>
          <Grid item lg={12}>
            <Typography>Message</Typography>
            <TextField
              name="message"
              type="text"
              fullWidth
              multiline
              minRows={4}
              maxRows={4}
              size="small"
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end">
          <Button
            variant="contained"
            type="submit"
            style={{ backgroundColor: "pink", color: "black" }}
          >
            <strong>Submit</strong>
          </Button>
        </Grid>
      </div>
    </form>
  );
}

export default Contact;
