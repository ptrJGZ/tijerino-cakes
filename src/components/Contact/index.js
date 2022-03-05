import React, { useRef, useState } from "react";
import { Typography, TextField, Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import emailjs from "@emailjs/browser";
import { emailConfig } from "../../constants/emailConfiguration";

const SubmitButton = styled(Button)({
  backgroundColor: "#FBC740",
  borderRadius: "10px",
  padding: "4px 48px",
  textTransform: "none",
  color: "white",
  "&:hover": {
    backgroundColor: "black",
  },
});

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
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^\d{10,12}$/;

    return re.test(phone);
  };

  // const validateForm = () => {};

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
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundImage: `url(${require("../../assets/images/contact-bg.jpg")})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "25% 75%",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "40rem",
          margin: "48px",
          padding: "32px",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h6"
          style={{
            borderBottom: "1px solid #FBC740",
            paddingBottom: "8px",
            marginBottom: "16px",
            textAlign: "left",
          }}
        >
          Contact Us
        </Typography>
        <form ref={form} onSubmit={sendEmail}>
          <div style={{ margin: "auto", width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={2}
              style={{ marginBottom: "16px" }}
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
              <SubmitButton
                disabled={
                  !contactForm.firstName ||
                  !validateEmail(contactForm.email) ||
                  !validatePhone(contactForm.phone) ||
                  !contactForm.message
                }
                variant="contained"
                type="Submit"
                // sx={{ color: "text.primary" }}
              >
                Submit
              </SubmitButton>
            </Grid>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
