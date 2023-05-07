import React from 'react';
import styled from 'styled-components';
import { Button, TextField } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '@mui/system';
const theme = createTheme();
const StyledForm = styled.form`
  & .MuiTextField-root {
    margin: ${({ theme }) => theme.spacing(1)}px;
    width: 25ch;
  }
`;

const StyledButton = styled(Button)`
  margin: ${({ theme }) => theme.spacing(1)}px;
`;

function ScheduleaMeet() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Open the Calendly widget when the form is submitted
    InlineWidget.prototype.openPopupWidget('https://calendly.com/kartikeygupta201/schedule-a-meet-with-us-at-fuelup?month=2023-03');
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <InlineWidget url="https://calendly.com/kartikeygupta201/schedule-a-meet-with-us-at-fuelup?month=2023-03" /> */}
    </ThemeProvider>
  );
}

export default ScheduleaMeet;
