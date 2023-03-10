import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { useSignup } from '../hooks/useSignup';


const theme = createTheme();

const SignUp = () => {
  
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState("")
  const [role, setRole] = useState("")
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await signup(
       firstname,
       lastname, 
       address, 
       role, 
       email, 
       password
       )
    console.log(firstname,lastname,email,password,address,role)
  };
  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                 <TextField 
                  name='first name'
                  label="First name"
                  onChange={(e) =>setFirstname(e.target.value)}
                  value={firstname}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name='last name'
                  label="last name"
                  onChange={(e) =>setLastname(e.target.value)}
                  value={lastname}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name='email'
                  type={'email'}
                  fullWidth
                  label="Email address"
                  onChange={(e) =>setEmail(e.target.value)}
                  value={email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name='password'
                  fullWidth
                  type={'password'}
                  label="Password"
                  onChange={(e) =>setPassword(e.target.value)}
                  value={password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name='address'
                  label="Your address"
                  onChange={(e) =>setAddress(e.target.value)}
                  value={address}
                />
              </Grid>
              <Grid item xs={12}> 
                <Select
                  required
                  fullWidth
                  name='role'
                  onChange={(e) =>setRole(e.target.value)}
                  value={role}
                >
                    <MenuItem value="student">Student</MenuItem>
                    <MenuItem value="teacher">Teacher</MenuItem>
                </Select>
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isLoading}
            >
              Sign Up
            </Button>
            {error && <div className='error'>{error}</div>}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={RouterLink} to="/"variant="body2">
                  {"Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;