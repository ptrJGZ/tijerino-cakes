import React, { useRef, useState } from "react";
import { Typography, TextField, Grid, Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import { emailConfig } from "../../constants/emailConfiguration";

const initialForm = {
  firstName: "",
  email: "",
  phone: "",
  message: "",
};

function Contact() {
  const form = useRef();
  const [contactForm, setContactForm] = useState(initialForm);

  console.log(contactForm);

  const validateEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^\d{10,12}$/;

    return re.test(phone);
  };

  const validateForm = () => {};

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

  const handleChange = (e) => {
    e.preventDefault();

    setContactForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
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
            <Typography>First Name*</Typography>
            <TextField
              name="firstName"
              type="text"
              fullWidth
              size="small"
              onChange={handleChange}
            />
          </Grid>
          <Grid item lg={6}>
            <Typography>Last Name</Typography>
            <TextField name="lastName" type="text" fullWidth size="small" />
          </Grid>
          <Grid item lg={6}>
            <Typography>Email*</Typography>
            <TextField
              name="email"
              type="email"
              fullWidth
              size="small"
              onChange={handleChange}
            />
          </Grid>
          <Grid item lg={6}>
            <Typography>Phone*</Typography>
            <TextField
              name="phone"
              type="tel"
              fullWidth
              size="small"
              onChange={handleChange}
            />
          </Grid>
          <Grid item lg={12}>
            <Typography>Address</Typography>
            <TextField name="address" type="text" fullWidth size="small" />
          </Grid>
          <Grid item lg={12}>
            <Typography>Message*</Typography>
            <TextField
              name="message"
              type="text"
              fullWidth
              multiline
              minRows={4}
              maxRows={4}
              size="small"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end">
          <Button
            disabled={
              !contactForm.firstName ||
              !validateEmail(contactForm.email) ||
              !validatePhone(contactForm.phone) ||
              !contactForm.message
            }
            variant="contained"
            type="submit"
            sx={{ backgroundColor: "pink", color: "black" }}
          >
            <strong>Submit</strong>
          </Button>
        </Grid>
      </div>
    </form>
  );
}

export default Contact;
