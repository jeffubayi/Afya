import React from "react";
//components
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
  Grid,
  Typography,
} from "@material-ui/core";
//routes
import { Link } from "react-router-dom";

//image / styles
import logo from "../../css/assests/logo.png";
import styles from "../../css/styles";

export default function loginScreen() {
  return (
    <Grid container component="main" style={styles.root}>
      <Grid item xs={false} sm={4} md={7} style={styles.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div style={styles.paper}>
          <form style={styles.form} noValidate>
            <div>
              <Avatar style={styles.avatar} src={logo}></Avatar>
            </div>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              placeholder="smamai@accessafya.com"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              placeholder="accessafya123"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Link to="/analytics">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={styles.submit}
              >
                Sign In
              </Button>
            </Link>
            <Grid container>
              <Grid item xs>
                <Typography variant="body2" color="primary">
                  Forgot password?
                </Typography>
              </Grid>
              <Grid item>
                <Typography color="primary" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Typography>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
