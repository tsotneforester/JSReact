import React, { useState, useContext, useEffect, useCallback, useMemo } from "react";
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
import { setToken } from "../store";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

import { BrowserRouter, Routes, Route, NavLink, Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [myError, setMyError] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const token = useSelector((state) => state.token);
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
      dispatcher(setToken(data));
      navigate("/homepage");
    } catch (err) {
      setMyError(err.message);
    }
  }

  return (
    <S.Container role="login">
      <S.H1>Sign In to your account</S.H1>
      <S.Form onSubmit={handleSubmit((data) => handleSubmit1(data))}>
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
          defaultValue={"tsotne.meladze@gmail.com"}
          error={errors.email?.type ? true : false}
          helperText={errors.email?.message}
        />

        {/* <TextField
          {...register("password", {
            required: "Password is required",
            pattern: {
              value: /.{6,}/,
              message: "Minimum 6 chars",
            },
          })}
          type="password"
          //type={showPassword ? "text" : "password"}

          variant="outlined"
          error={errors.password?.type ? true : false}
          helperText={errors.password?.message}
          label="Create password"
          placeholder="Create password"
        /> */}
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
            type={showPassword ? "text" : "password"}
          />
          <FormHelperText>{errors.password?.message}</FormHelperText>
        </FormControl>

        <Button sx={{ padding: "14px 10px" }} endIcon={<LoginIcon />} color={Object.keys(errors).length > 0 ? "error" : "success"} size="large" type="submit" variant="contained">
          Log In
        </Button>
      </S.Form>
      <S.H2>
        Don’t have an account? <S.Link to="/signup">Sign Up</S.Link>
      </S.H2>
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
  width: 100%;
  min-height: 100svh;
  max-width: 352px;
  border-radius: 0;
  background-color: transparent;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

S.H1 = styled.h1`
  margin-bottom: 70px;
  color: #1e1a50;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

S.H2 = styled.h2`
  color: #767e96;
  font-size: 14px;
  font-weight: 500;
  line-height: 25px;
  text-align: center;
  margin-top: 6px;
`;

S.Link = styled(Link)`
  color: #328bf3;
  font-weight: 700;
`;
S.Form = styled.form`
  height: 234px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 88px 88px max-content;
  width: 100%;

  input {
    width: 100%;
  }
`;
