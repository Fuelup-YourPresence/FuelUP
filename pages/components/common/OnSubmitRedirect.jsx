import { Box, Button, InputBase, Snackbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import PhoneInput from "react-phone-number-input";
import { FlagIcon } from "react-flag-kit";
import styled from "styled-components";
<<<<<<< HEAD
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
=======
import MuiAlert from "@mui/material/Alert";

>>>>>>> 21cb9644713f194630d48fc74690c239398d963f
const phoneInputStyle = {
  display: "flex",
  alignItems: "center",
  borderRadius: "20px",
  backgroundColor: "white",
  width: "100px",
  height: "140px",
};

const flagStyle = {
  display: "inline-flex",
  borderRadius: "50px",
  overflow: "hidden",
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const OnSubmitRedirect = ({ color }) => {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
<<<<<<< HEAD
    date: "",
  });
  const handleDateTimeChange = (newDateTime) => {
    const day = newDateTime.day();
    setData({ ...data, date: newDateTime.$d });
  };
  const handleSubmit = () => {
=======
    datetime: "25/5/2023 9:00:00",
  });

  const handleSubmit = async () => {
>>>>>>> 21cb9644713f194630d48fc74690c239398d963f
    console.log(data);
    fetch(process.env.NEXT_PUBLIC_GOOGLE_SHEET_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: data.name,
        Phone: data.phone,
        Email: data.email,
        Time: data.datetime,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.length > 0) {
          setOpen(true);
        }
      });
  };



  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
<<<<<<< HEAD
    <div
      style={{ backgroundColor: color, padding: "20px", borderRadius: "70px" }}
    >
      <Stack>
        <div style={{ textAlign: "center" }}>
          <Typography variant="h6" style={{ padding: "5px", color: "white" }}>
          Schedule a 15 min call for quick discussion about our services
          </Typography>
        </div>
        <Box padding="15px">
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-around"
            sx={{
              border: "2px solid #FFFFFF",
              padding: "18px",
              borderRadius: "40px",
            }}
          >
            <InputBase
              required
              id="name"
              label="Name"
              variant="outlined"
              placeholder="Name"
              style={{
                borderRadius: "20px",
                backgroundColor: "white",
                paddingLeft: "15px",
              }}
              fullWidth
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <InputBase
              required
              id="email"
              label="Email"
              type="email"
              placeholder="Email"
              variant="outlined"
              style={{
                borderRadius: "20px",
                backgroundColor: "white",
                paddingLeft: "15px",
              }}
              fullWidth
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <InputBase
              required
              id="Phone"
              label="Phone"
              placeholder="Phone"
              type="tel"
              variant="outlined"
              style={{
                borderRadius: "20px",
                backgroundColor: "white",
                paddingLeft: "15px",
              }}
              fullWidth
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
             <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack style={{backgroundColor:'white',width:'100%',borderRadius:'20px'}}>
            <MobileDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} 
            onChange={handleDateTimeChange}/>
            </Stack>
            </LocalizationProvider>
            {/* <InputBase
              required
              id="captcha"
              label="Captcha"
              type="text"
              placeholder="Captcha"
              variant="outlined"
              style={{
                borderRadius: "20px",
                backgroundColor: "white",
                paddingLeft: "15px",
              }}
              fullWidth
            /> */}
            <Button
=======
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Success, Google Meet will be scheduled.
        </Alert>
      </Snackbar>
      <div
        style={{
          backgroundColor: color,
          padding: "20px",
          borderRadius: "70px",
        }}
      >
        <Stack>
          <div style={{ textAlign: "center" }}>
            <Typography variant="h6" style={{ padding: "5px", color: "white" }}>
              Schedule a 15 min call for quick discussion about our services
            </Typography>
          </div>
          <Box padding="15px">
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-around"
>>>>>>> 21cb9644713f194630d48fc74690c239398d963f
              sx={{
                border: "2px solid #FFFFFF",
                padding: "18px",
                borderRadius: "40px",
              }}
            >
              <InputBase
                required
                id="name"
                label="Name"
                variant="outlined"
                placeholder="Name"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "white",
                  paddingLeft: "15px",
                }}
                fullWidth
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
              <InputBase
                required
                id="email"
                label="Email"
                type="email"
                placeholder="Email"
                variant="outlined"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "white",
                  paddingLeft: "15px",
                }}
                fullWidth
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              <InputBase
                required
                id="Phone"
                label="Phone"
                placeholder="Phone"
                type="tel"
                variant="outlined"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "white",
                  paddingLeft: "15px",
                }}
                fullWidth
                onChange={(e) => setData({ ...data, phone: e.target.value })}
              />
              <InputBase
                required
                id="captcha"
                label="Captcha"
                type="text"
                placeholder="Captcha"
                variant="outlined"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "white",
                  paddingLeft: "15px",
                }}
                fullWidth
              />
              <Button
                sx={{
                  borderRadius: "50%",
                  backgroundColor: "#C4F0AB",
                  height: "50px",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
                type="submit"
                onClick={() => {
                  handleSubmit();
                }}
              >
                <SendIcon sx={{ color: "#153240" }} />
              </Button>
            </Stack>
          </Box>
        </Stack>
      </div>
    </>
  );
};

export default OnSubmitRedirect;
