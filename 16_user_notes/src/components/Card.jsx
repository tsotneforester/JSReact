import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { format } from "date-fns";
import { supabase } from "../client";
import { setTaskData, setModalOpened, setEditTaskID } from "../noteSlice";
import { iconStyles } from "../styled";
import { CATEGORIES } from "../data";
import { root } from "../styled";

import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

export default function Card({ id, title, desc, status, date, category }) {
  const taskData = useSelector((state) => state.note.taskData);
  const dispatcher = useDispatch();

  function handleEdit(id) {
    console.log("id");
    dispatcher(setModalOpened(true));
    dispatcher(setEditTaskID(id));
  }

  function handleDelete(e) {
    deleteData(e);
  }

  async function deleteData(id) {
    try {
      const { error } = await supabase.from("notes").delete().eq("id", id);

      if (error) throw new Error(error);
      dispatcher(setTaskData(taskData.filter((e) => e.id != id).toSorted((a, b) => b.id - a.id)));
    } catch (err) {
      setMyError(err.message);
    }
  }

  async function fulfillCard(id) {
    try {
      const { error } = await supabase.from("notes").update({ status: true }).eq("id", id);

      if (error) throw new Error(error);

      dispatcher(
        setTaskData(
          taskData
            .map((e) => {
              if (e.id == id) {
                return { ...e, status: true };
              }

              return e;
            })
            .toSorted((a, b) => b.id - a.id)
        )
      );
    } catch (err) {
      alert(err.message);
    }
  }

  useEffect(() => {
    console.log("card ♻");
  }, []);

  return (
    <S.Container role="card" key={id} text={status} color={status ? "#000000" : "#ffffff"} bg={category} bgc={status ? "#ffffff" : CATEGORIES[category][1]}>
      {!status && (
        <CheckBoxOutlineBlankIcon
          onClick={() => fulfillCard(id)}
          sx={{
            ...iconStyles,
            padding: 0,
            gridArea: "check",
          }}
        />
      )}

      <h1>{title}</h1>

      {!status ? (
        <ModeEditIcon
          onClick={() => handleEdit(id)}
          sx={{
            ...iconStyles,
            gridArea: "edit",
          }}
        />
      ) : (
        <DoneOutlineIcon />
      )}

      <DeleteIcon
        onClick={() => handleDelete(id)}
        sx={{
          ...iconStyles,
          gridArea: "delete",
        }}
      />
      <p>{desc}</p>

      <h6>{format(new Date(date), "MMM dd, yyyy")}</h6>
    </S.Container>
  );
}

const S = {};

S.Container = styled.div`
  width: 100%;
  height: auto;
  padding: 16px;
  color: ${(prop) => prop.color};

  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px;
  opacity: 1;

  display: grid;
  grid-template-areas:
    "edit title title delete"
    "desc desc desc desc"
    "check check date date";
  grid-template-columns: max-content 1fr max-content max-content;
  grid-template-rows: max-content 1fr max-content;
  gap: 6px;
  background-color: ${(prop) => prop.bgc};

  background-image: url(/assets/${(prop) => prop.bg}.png);
  background-repeat: no-repeat; //repeat-y/repeat-x/repeat/space/round
  background-position: 0%; // center/bottom/left/right/(%, px)
  background-attachment: scroll; //fixed / local
  background-size: cover; //length/cover/contain

  text-decoration: ${(prop) => (prop.text ? "line-through" : "none")};

  @media only screen and (min-width: ${root.media.tablet}px) {
  }
  h1 {
    grid-area: title;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    margin-left: 20px;
    text-transform: capitalize;
  }

  p {
    grid-area: desc;
    opacity: 0.8;
    font-size: 18px;
  }

  h6 {
    grid-area: date;
    text-align: right;
  }
`;
