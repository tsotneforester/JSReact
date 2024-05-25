import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setTaskData, setModalOpened } from "../noteSlice";
import { Skeleton, Button } from "@mui/material";
import { supabase } from "../client";
import Search from "../components/Search";
import { setCategory } from "../filterSlice";
import { root } from "../styled";
import NoNotes from "../components/NoNotes";
import Spinner from "../components/Spinner";

import styled from "styled-components";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

import Header from "../components/Header";
import Modal from "../components/Modal";
import Card from "../components/Card";
import CategoryTabs from "../components/CategoryTabs";

const Homepage = () => {
  let navigate = useNavigate();

  const tempTaskData = useSelector((state) => state.note.tempTaskData);

  let userID = JSON.parse(sessionStorage.getItem("token"))?.user.id;

  const dispatcher = useDispatch();

  const [spinnerLoading, setSpinnerLoading] = useState(true);
  const [skeletonLoading, setSkeletonLoading] = useState(true);

  function handleChange(params, newValue) {
    dispatcher(setCategory(newValue));
  }

  const handleClickOpen = () => {
    dispatcher(setModalOpened(true));
    console.log("sadas");
  };

  async function fetchData(userID) {
    try {
      let { data, error } = await supabase.from("notes").select().eq("user", userID);
      if (error) throw new Error(error);
      dispatcher(setTaskData(data.toSorted((a, b) => b.id - a.id)));
      setSpinnerLoading(false);
      // dispatcher(setTempTaskData(data.toSorted((a, b) => b.id - a.id)));
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    console.log("homepage ♻");
    if (sessionStorage.getItem("token")) {
      fetchData(userID);
    } else {
      navigate("/");
    }

    const t = setTimeout(() => {
      setSkeletonLoading(false);
    }, 1200);

    return () => {
      clearInterval(t);
    };
  }, []);

  return (
    <S.Container role="container">
      <Header />
      <Search />
      <CategoryTabs />
      <S.AddNote onClick={handleClickOpen} variant="contained" endIcon={<PlaylistAddIcon />}>
        Add Note
      </S.AddNote>
      <S.Main>
        {spinnerLoading ? (
          <Spinner />
        ) : tempTaskData.length == 0 ? (
          <NoNotes />
        ) : (
          tempTaskData.map((e, i) => {
            return skeletonLoading ? (
              <Skeleton key={i} width={"100%"} variant="rounded" animation="wave">
                <Card {...e} />
              </Skeleton>
            ) : (
              <Card key={i} {...e} />
            );
          })
        )}
      </S.Main>
      <Modal />
    </S.Container>
  );
};

export default Homepage;

const S = {};

S.Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
  margin: 36px 0 48px 0;
  gap: 20px;

  @media only screen and (min-width: ${root.media.tablet}px) {
    max-width: 700px;
    display: grid;
    grid-template-areas:
      "header header"
      "search search"
      "cat add"
      "main main";
    grid-template-columns: 1fr max-content;
    grid-template-rows: auto;
  }
`;

S.AddNote = styled(Button)`
  /* display: none !important; */
  width: 100%;
  max-width: ${root.card_max_width};
  order: 2;
  @media only screen and (min-width: ${root.media.tablet}px) {
    height: 40px;
    border-radius: 4px;
    grid-area: add;
    display: inline-flex !important ;
  }
`;

S.Main = styled.div`
  width: 100%;
  max-width: ${root.card_max_width};
  border-radius: 4px;
  grid-area: main;
  order: 4;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
  @media only screen and (min-width: ${root.media.tablet}px) {
    justify-items: center;
    justify-self: center;
    /* margin: 0 auto; */
  }
`;
