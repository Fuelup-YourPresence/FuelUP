import { Box, Button, InputBase, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import PhoneInput from "react-phone-number-input";
import { FlagIcon } from "react-flag-kit";
import styled from "styled-components";

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
const OnSubmitRedirect = ({ color }) => {
  // console.log(color);
  const [phoneNumber, setPhoneNumber] = useState();
  // console.log(color);
  const handleOnChange = (value) => {
    setPhoneNumber(value);
  };
  return (
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
            />
            <InputBase
              required
              id="email"
              label=" Email"
              type="email"
              placeholder="Email"
              variant="outlined"
              style={{
                borderRadius: "20px",
                backgroundColor: "white",
                paddingLeft: "15px",
              }}
              fullWidth
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
            >
              <SendIcon sx={{ color: "#153240" }} />
            </Button>
          </Stack>
        </Box>
      </Stack>
    </div>
  );
};

export default OnSubmitRedirect;
