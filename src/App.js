import React, { useState } from 'react';
import './App.css';
import logo from './assets/mlab.png'
import guinnessLogo from './assets/logos_b.png'
import robotHand from './assets/download.png'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import { themeOptions } from './assets/themeOptions';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Modal from './components/Modal';
import Register from './pages/Register';
import { Link } from "react-router-dom";
export const theme = createTheme(themeOptions);
const App = () => {
  const [showModal, setShowModal] = useState(false)

  const [values, setValues] = useState({
    email: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const TAG = ["SURPRISE SPEAKERS", "PRIZES", "GIVEAWAYS", "COMMUNITY", "BRAIN FOOD"]
  return (
    <ThemeProvider theme={theme} >
      {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
      <div className="container">
        <div className='top-row'>
          <div className='left-col'>
            <div className='robotHand'>
            <img className='robotHand' src={robotHand} />
            </div>
            <div className='logos'>
              <img className='mlabLogo' src={guinnessLogo} />
            </div>

          </div>
          <div className='right-col'>
            <Typography gutterBottom align='center' variant="h2" colour="light">Largest Artificial Intelligence Lesson</Typography>
            <Typography gutterBottom align='center' variant="body1">mLab and its partners are setting out to host the largest ever online artificial intelligence lesson.</Typography>
            {/* <iframe style={{borderRadius: 20}} width="100%" height="315" src="https://www.youtube.com/embed/tDnYGSV4wuU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <div className='form'>
              <p className='form-header'>YOU are invited! Register NOW!</p>
              <FormControl fullWidth sx={{ m: 1, width: '100%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                <OutlinedInput
                  fullWidth
                  id="outlined-adornment-email"
                  type="email"
                  value={values.email}
                  onChange={handleChange('email')}
                  label="Email"
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1, width: '100%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  fullWidth
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>


              <Link style={{ color: "#fff" }} className='routeLink' to="/Register"><Button sx={{ mb: 2, mt: 2 }} disableElevation fullWidth size="large" href='/signup' variant="contained">Login</Button>
              </Link>
              <Button fullWidth size="large" color="secondary" variant="secondary">Forgot Password?</Button>


            </div>
            <p>The lesson will be available here from 10 March 2022 at 10am for 24 hours.  You can access the lesson at any time during this time period. Create your account today and share far and wide. </p>
            <h2>#AIForAll</h2>
          </div>
        </div>
        <Stack sx={{ p: 1 }} direction="row" spacing={1}>
          {TAG.map((c, i) => {
            return (<Chip label={c} />)
          })}
        </Stack>
      </div>
    </ThemeProvider>
  );
}

export default App;
