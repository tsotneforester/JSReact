import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { supabase } from "../client";
import { useSelector, useDispatch } from "react-redux";
import { root } from "../styled";

import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, FormControl, InputLabel, MenuItem, Button, Alert, Select } from "@mui/material";

import { CATEGORIES, EMPTYFORM, validateValues } from "../data";
import { setTaskData, setModalOpened } from "../noteSlice";

export default function Modal() {
  const taskData = useSelector((state) => state.note.taskData);
  const modalOpened = useSelector((state) => state.note.modalOpened);
  const editTaskID = useSelector((state) => state.note.editTaskID);
  const category = useSelector((state) => state.filter.category);

  const dispatcher = useDispatch();

  let userID = JSON.parse(sessionStorage.getItem("token"))?.user.id;

  const [inputFields, setInputFields] = useState(EMPTYFORM);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleClose = () => {
    dispatcher(setModalOpened(false));
  };

  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value.toLowerCase() });
  };

  function formSubmit(e) {
    e.preventDefault();
    setErrors(validateValues(inputFields, Object.keys(CATEGORIES)));
    setSubmitting(true);
  }

  async function insertData(userID) {
    try {
      const { data, error } = await supabase
        .from("notes")
        .insert([{ ...inputFields, user: userID }])
        .select();

      dispatcher(setTaskData([...taskData, data[0]].toSorted((a, b) => b.id - a.id)));

      if (error) throw new Error(error);
    } catch (err) {
      console.log(err.message);
    }
  }

  async function updateData(userID, taskID) {
    try {
      const { error } = await supabase
        .from("notes")
        .update([{ ...inputFields, user: userID }])
        .eq("id", taskID);

      dispatcher(
        setTaskData(
          taskData
            .map((e) => {
              if (e.id == taskID) {
                return { ...e, ...inputFields };
              }

              return e;
            })
            .toSorted((a, b) => b.id - a.id)
        )
      );

      if (error) throw new Error(error);
    } catch (err) {
      alert(err.message);
    }
  }

  useEffect(() => {
    console.log("MODAL ♻ - Form Submitt");
    if (Object.keys(errors) == 0 && submitting) {
      console.log("🚀");
      editTaskID ? updateData(userID, editTaskID) : insertData(userID);
      dispatcher(setModalOpened(false));
      setInputFields(EMPTYFORM);
      setSubmitting(false);
    }
  }, [errors]);

  useEffect(() => {
    console.log("MODAL ♻ - Open/close");
    if (editTaskID) {
      let temp = taskData.filter((e) => e.id == editTaskID);
      const { title, category, desc } = temp[0];
      setInputFields({
        title: title,
        category: category,
        desc: desc,
      });
    }
    if (!editTaskID && category) {
      // setInputFields(EMPTYFORM);
      // setErrors({});
      setInputFields({ ...inputFields, category: category });
      // setSubmitting(false);
    }
    if (!modalOpened) {
      setErrors({});
      setInputFields(EMPTYFORM);
      setSubmitting(false);
    }
  }, [modalOpened]);

  // useEffect(() => {
  //   setInputFields({ ...inputFields, category: category });
  // }, [category]);

  return (
    <S.Dialog role="best" open={modalOpened} onClose={handleClose}>
      <DialogTitle role="title" id="alert-dialog-title">
        Add Note
      </DialogTitle>
      <DialogContent role="content">
        <S.Form id="newsletterForm">
          <TextField name="title" onChange={handleChange} label="Add title" variant="outlined" value={inputFields.title} />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select sx={{ textTransform: "capitalize" }} labelId="demo-simple-select-label" id="demo-simple-select" value={inputFields.category} label="Category" name="category" onChange={handleChange}>
              {Object.keys(CATEGORIES).map((e, i) => {
                return (
                  <MenuItem sx={{ textTransform: "capitalize" }} key={i} value={e}>
                    {e}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <TextField name="desc" onChange={handleChange} label="Add description" multiline rows={8} defaultValue={inputFields.desc} />
        </S.Form>
        <S.Errors>
          {errors.title && <Alert severity="error">{errors.title}</Alert>}
          {errors.category && <Alert severity="error">{errors.category}</Alert>}
        </S.Errors>
      </DialogContent>
      <DialogActions role="actions">
        <Button onClick={handleClose}>Cencel</Button>
        <Button type="submit" form="newsletterForm" onClick={formSubmit} autoFocus>
          Add
        </Button>
      </DialogActions>
    </S.Dialog>
  );
}

const S = {};

S.Dialog = styled(Dialog)`
  & .MuiPaper-root {
    width: 100%;
    max-width: ${root.card_max_width};
    /* background-color: #f3f3f3; */
    @media only screen and (min-width: ${root.media.tablet}px) {
      max-width: 620px;
    }
  }

  & .MuiInputBase-root {
    background-color: #f2f1f1;
  }
`;

S.Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 12px;
  margin-top: 10px;

  @media only screen and (min-width: ${root.media.tablet}px) {
    grid-template-columns: 3fr 2fr;
    grid-template-rows: auto auto;
  }
`;

S.Errors = styled.div`
  margin: 12px 0 0 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;
