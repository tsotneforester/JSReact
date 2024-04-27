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
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Alert from "@mui/material/Alert";

import { BrowserRouter, Routes, Route, NavLink, Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [myError, setMyError] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleSubmit1(e) {
    try {
      if (e.password1 != e.password2) {
        throw new Error("passwords are not equal");
      }

      const { data, error } = await supabase.auth.signUp({
        email: e.email,
        password: e.password1,
        options: {
          data: {
            full_name: e.fullName,
          },
        },
      });
      if (error) throw new Error(error);
      navigate("/");
    } catch (error) {
      setMyError(error.message);
    }
  }

  return (
    <S.Container role="signup">
      <S.H1>Create New Account</S.H1>
      <S.Form onSubmit={handleSubmit((data) => handleSubmit1(data))}>
        <TextField
          {...register("fullName", {
            required: "Full name is required",
          })}
          label="Full name"
          placeholder="Enter your name"
          variant="outlined"
          defaultValue={"tsotnektulu"}
          error={errors.email?.type ? true : false}
          helperText={errors.email?.message}
        />
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

        <FormControl variant="outlined" error={errors.password1?.type ? true : false}>
          <InputLabel>Create password</InputLabel>
          <OutlinedInput
            {...register("password1", {
              required: "Password is required",
              pattern: {
                value: /.{6,}/,
                message: "Minimum 6 chars",
              },
            })}
            label="Create password"
            placeholder="Create password"
            type={showPassword ? "text" : "password"}
          />
          <FormHelperText>{errors.password1?.message}</FormHelperText>
        </FormControl>

        <FormControl variant="outlined" error={errors.password2?.type ? true : false}>
          <InputLabel>Confirm password</InputLabel>
          <OutlinedInput
            {...register("password2", {
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
            label="Confirm password"
            placeholder="Confirm password"
            type={showPassword ? "text" : "password"}
          />
          <FormHelperText>{errors.password2?.message}</FormHelperText>
        </FormControl>

        <Button sx={{ padding: "14px 10px" }} startIcon={<LockOpenIcon />} size="large" type="submit" variant="contained">
          Sign Up
        </Button>
      </S.Form>
      <S.H2>
        Already have an account? <S.Link to="/">Log In</S.Link>
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
  justify-content: flex-start;
  padding-top: 78px;
  align-items: center;
`;

S.H1 = styled.h1`
  margin-bottom: 34px;
  color: #1e1a50;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

S.H2 = styled.h1`
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
  /* height: 336px; */

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 88px 88px 88px 88px max-content;
  width: 100%;

  input {
    width: 100%;
  }
`;
