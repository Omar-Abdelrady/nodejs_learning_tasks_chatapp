import React, { useState } from "react";
import { signIn } from "next-auth/react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  createTheme,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
const defaultTheme = createTheme();
import AuthApi from "../api/auth/auth";
import ErrorAlert from "@/components/alerts/error.alert";
import { useRouter } from "next/router";
function Register() {
  const authApi = new AuthApi();
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const handleSubmit = async (event: any) => {
    try {
      event.preventDefault();
      const dataForm = new FormData(event.currentTarget);
      const response = await authApi.register({
        email: dataForm.get("email"),
        password: dataForm.get("password"),
        first_name: dataForm.get("first_name"),
        last_name: dataForm.get("last_name"),
      });
      if (!response.success) {
        setError(response.error);
      }
      router.push("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {error && <ErrorAlert errors={error} />}
            <TextField
              margin="normal"
              required
              fullWidth
              id="first_name"
              label="First name"
              name="first_name"
              autoComplete="text"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="last_name"
              label="Last name"
              name="last_name"
              autoComplete="text"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="text"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Register;
