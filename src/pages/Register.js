import React, { useState } from 'react';
import logo from '../assets/mlab.png'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { themeOptions } from '../assets/themeOptions';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import moment from 'moment'
import { Link } from 'react-router-dom';
export const theme = createTheme(themeOptions);
const Input = styled('input')({
  display: 'none',
});


export default function Register() {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const steps = [
    'Personal Details',
    'Contact Details',
    'Experience Details',
    'Complete'
  ];
  // >>>>>>> Do not delete <<<<<<
  moment.locale('en')
  const year = new Date().getFullYear();
  const number = 40
  const a = new Date();
  const y = a.getFullYear()
  const d = a.getDay()
  const m = moment(`${y}-${d}`, "YYYY-MM").daysInMonth()
  const years = Array.from({ length: number }, (v, i) => year - 4 - i);
  const days = Array.from({ length: m }, (v, i) => 0 + 1 + i);
  const shortMonths = moment.months();
  // >>>>>>>>>> <<<<<<<<<<<<<
  return (
    <ThemeProvider theme={theme}>
      <div className='signup-main'>
        <div className='signup-inner'>
          <img src={logo} alt="logo" />
          <Typography variant="body1" color="primary" align='center'>Complete your Personal Details</Typography>
          <br /> <br />
          <div className='stepper-style'>
            <Box sx={{ width: '100%', display: 'none' }}>
              <Stepper activeStep={0} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </div>

          <Box sx={{ paddingBottom: 2, paddingTop: 4 }}>
            {/* <Typography variant='subtitle1' color="primary">Personal Details</Typography> */}
          </Box>

          <Typography variant='h6' align='left' sx={{ width: '100%', mb: 2 }} color="primary">
            Personal Details
          </Typography>

          {/* Name */}
          <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-Name">Name</InputLabel>
            <OutlinedInput

              id="outlined-adornment-Name"
              type="text"
              // onChange={handleChange('email')}
              label="Name"
            />
          </FormControl>

          {/* Surname */}
          <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-surname">Surname</InputLabel>
            <OutlinedInput
              fullWidth
              id="outlined-adornment-surname"
              type='text'
              label="Surname"
            />
          </FormControl>

          {/* Phone Number */}
          <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-phoneNumber">Phone Number</InputLabel>
            <OutlinedInput
              fullWidth
              id="outlined-adornment-phoneNumber"
              type='text'
              label="Phone Number"
            />
          </FormControl>

          {/* Email Address */}
          <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-email">Email Address</InputLabel>
            <OutlinedInput
              fullWidth
              id="outlined-adornment-email"
              type='text'
              label="Email Address"
            />
          </FormControl>
          <Typography variant='subtitle1' align='center' sx={{ width: '100%', mt: 2 }} color="primary">Profile Image</Typography>

          <Stack sx={{ marginBottom: 3 }}>
            <label htmlFor="contained-button-file">
              <Input accept="image/*" id="contained-button-file" type="file" />
              <Button variant="contained" component="span">
                Upload
              </Button>
            </label>
          </Stack>

          <Stack sx={{ mt: 5, width: '100%' }}>
            <Button sx={{ mb: 1 }} disableElevation fullWidth size="large" variant="contained">Submit</Button>
            <Link to="/"><Button disableElevation fullWidth size="large" variant="outlined">Cancel</Button></Link>
          </Stack>
        </div>
      </div>
    </ThemeProvider>
  );
}