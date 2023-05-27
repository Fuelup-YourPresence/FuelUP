import SendIcon from "@mui/icons-material/Send";
import { Box, Button, InputBase, Snackbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";

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
const invalid = {
  borderRadius: "20px",
  backgroundColor: "white",
  padding: " 0 15px",
  border: "2px solid red",
};
const valid = {
  borderRadius: "20px",
  backgroundColor: "white",
  padding: " 0 15px",
};
const validphone = {
  borderRadius: "20px",
  backgroundColor: "white",
  padding: "0 15px",
  border: "none",
};
const validdate = {
  backgroundColor: "white",
  borderRadius: "5px",
};
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const OnSubmitRedirect = ({ color }) => {
  const [mobileMenu, openMobileMenu] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [isvalidname, setIsvalidname] = useState(true);
  const [isvalidemail, setIsvalidemail] = useState(true);
  const [isvalidphone, setIsvalidphone] = useState(true);
  const [isvaliddate, setIsvaliddate] = useState(true);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    datetime: "",
  });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        openMobileMenu(true);
      } else {
        openMobileMenu(false);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleDateTimeChange = (newDateTime) => {
    const day = newDateTime.day();
    setIsvaliddate(true);
    setData({ ...data, datetime: newDateTime.$d });
  };

  const getOneDayAfter = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    return tomorrow.setDate(tomorrow.getDate() + 1);
  };
  function nameHandler(e) {
    const inputValue = e.target.value;
    const regex = /^[a-zA-Z\s]*$/;
    if (regex.test(inputValue)) {
      setData({ ...data, name: inputValue });
      setIsvalidname(true);
    } else {
      setIsvalidname(false);
    }
  }
  function emailHandler(e) {
    const inputValue = e.target.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression to match a valid email format
    if (regex.test(inputValue)) {
      setData({ ...data, email: inputValue });
      setIsvalidemail(true);
    } else {
      setIsvalidemail(false);
    }
  }
  function phoneHandler(value) {
    setIsvalidphone(true);
    setData({ ...data, phone: value });
  }
  const handleSubmit = async () => {
    if (
      data.time === "" ||
      data.phone === "" ||
      data.email === "" ||
      data.name === ""
    ) {
      if (data.name === "") {
        setIsvalidname(false);
      }
      if (data.phone === "") {
        setIsvalidphone(false);
      }
      if (data.email === "") {
        setIsvalidemail(false);
      }
      if (data.datetime === "") {
        setIsvaliddate(false);
      }
      return;
    }
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
          maxWidth: "55rem",
        }}
      >
        <Stack>
          <div style={{ textAlign: "center" }}>
            <Typography
              variant="h6"
              sx={(theme) => ({
                padding: "5px",
                color: "white",
                padding: "40px 10px 10px 10px",

                [theme.breakpoints.down("md")]: {
                  fontSize: "1.1rem",
                },
              })}
            >
              Schedule a 15 min call for quick discussion about our services
            </Typography>
          </div>
          <Box padding="15px">
            <Stack
              direction={{ xs: "column", sm: "row" }}
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
                style={isvalidname ? { ...valid } : { ...invalid }}
                sx={{
                  minHeight: "60px",
                }}
                fullWidth
                onChange={nameHandler}
              />
              <InputBase
                required
                id="email"
                label="Email"
                type="email"
                placeholder="Email"
                variant="outlined"
                sx={{
                  minHeight: "60px",
                }}
                style={isvalidemail ? { ...valid } : { ...invalid }}
                fullWidth
                onChange={emailHandler}
              />
              {/* <InputBase
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
              /> */}

              <PhoneInput
                id="phoneInput"
                className="phone-input"
                international
                defaultCountry={"IN"}
                limitMaxLength={true}
                countryCallingCodeEditable={false}
                value={data.phone}
                placeholder={"e.g. +91 98374-XXXXX"}
                onChange={phoneHandler}
                style={
                  isvalidphone
                    ? { ...validphone }
                    : { ...validphone, border: "2px solid red" }
                }
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack
                  style={{
                    width: "100%",
                  }}
                >
                  <MobileDateTimePicker
                    autoFocus={false}
                    sx={
                      isvaliddate
                        ? { ...validdate }
                        : { ...validdate, border: "2px solid red" }
                    }
                    onChange={handleDateTimeChange}
                  />
                </Stack>
              </LocalizationProvider>
              {mobileMenu ? (
                <Button
                  sx={{
                    borderRadius: "1rem",
                    backgroundColor: "#C4F0AB",
                    height: "50px",
                    fontSize: "1.1rem",
                    color: "#153240",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                  }}
                  type="submit"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Submit &nbsp; <SendIcon sx={{ color: "#153240" }} />
                </Button>
              ) : (
                <Button
                  sx={{
                    borderRadius: "50%",
                    backgroundColor: "white",
                    height: "60px",
                    "&:hover": {
                      backgroundColor: "#C4F0AB",
                      color: "#153240",
                    },
                  }}
                  type="submit"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  <SendIcon sx={{ color: "#153240" }} />
                </Button>
              )}
            </Stack>
          </Box>
        </Stack>
      </div>
    </>
  );
};

export default OnSubmitRedirect;
