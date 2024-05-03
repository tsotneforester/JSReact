import React, { useState, useContext, useEffect, useCallback, useMemo } from "react";

import { root } from "../styled";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import { supabase } from "../client";
import Visibility from "@mui/icons-material/Visibility";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import { FormHelperText } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

import { styledFormContainer, styledLink } from "../styled";

import { BrowserRouter, Routes, Route, NavLink, Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [myError, setMyError] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const dispatcher = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleSubmit1(e) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: e.email.toLowerCase(),
        password: e.password.toLowerCase(),
      });

      if (error) throw new Error(error);
      sessionStorage.setItem("token", JSON.stringify(data));
      // dispatcher(setToken(data));
      navigate("/homepage");
    } catch (err) {
      setMyError(err.message);
    }
  }

  useEffect(() => {
    console.log("login rendered");

    if (sessionStorage.getItem("token")) {
      navigate("/homepage");
    }
  }, []);

  return (
    <S.Container role="login">
      <h1>Sign In to your account</h1>
      <form onSubmit={handleSubmit((data) => handleSubmit1(data))}>
        <TextField
          {...register("email", {
            required: "Email Address is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Valid email required",
            },
          })}
          label="Email"
          placeholder="Enter your email"
          variant="outlined"
          // defaultValue={""}
          error={errors.email?.type ? true : false}
          helperText={errors.email?.message}
        />

        <FormControl variant="outlined" error={errors.password?.type ? true : false}>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /.{6,}/,
                message: "Minimum 6 chars",
              },
            })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            placeholder="Enter your password"
            // defaultValue={}
            type={showPassword ? "text" : "password"}
          />
          <FormHelperText>{errors.password?.message}</FormHelperText>
        </FormControl>

        <Button sx={{ padding: root.button_padding }} endIcon={<LoginIcon />} color={Object.keys(errors).length > 0 ? "error" : "success"} size="large" type="submit" variant="contained">
          Log In
        </Button>
      </form>
      <h2>
        Don’t have an account? <S.Link to="/signup">Sign Up</S.Link>
      </h2>
      {myError && (
        <Alert sx={{ marginTop: "10px" }} severity="error">
          {myError}
        </Alert>
      )}
    </S.Container>
  );
}

const S = {};

S.Container = styled.div`
  ${styledFormContainer}
  justify-content: center;
`;

S.Link = styled(Link)`
  ${styledLink}
`;
