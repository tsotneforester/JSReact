import React, { useState, useEffect, useRef } from "react";
import { filter, searchAPI, genresAPI, popularAPI } from "./constants";
import styled from "styled-components";
import axios from "axios";
import Form from "./components/Form";
import Card from "./components/Card";

function App() {
  const inputRef = useRef(null);
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  async function apiFunc(url) {
    setLoading(true);
    setError(true);
    try {
      let searchResponse = await axios.get(url);
      let genresResponse = await axios.get(genresAPI);

      let genresData = genresResponse.data.genres;

      let movieData = searchResponse.data.results.filter((e) => {
        for (let key in filter) {
          if (!e[key]) return false;
        }
        return true;
      });

      for (let i = 0, n = movieData.length; i < n; i++) {
        let genres = [];
        movieData[i].genre_ids.forEach((code) => {
          genresData.forEach((element) => {
            if (element.id === code) {
              genres.push(element.name);
            }
            movieData[i].genre_ids = genres;
          });
        });
      }

      let movieCount = movieData.length;
      if (movieCount == "0") {
        setError("No Data");
        setLoading(false);
        setData([]);
        return;
      }
      if (movieCount > 0) {
        setData(movieData);
        setLoading(false);
      }
    } catch (e) {
      console.log("ERROR!!!", e);
    }
  }

  const handler = (e) => {
    e.preventDefault();
    if (inputRef.current.value) {
      apiFunc(searchAPI + inputRef.current.value);
    }
  };

  useEffect(() => {
    apiFunc(popularAPI);
  }, []);

  if (data) {
    return (
      <>
        <Form ref={inputRef} handler={handler} />

        <S.main>
          {error && <span className="no-data">{error}</span>}
          {loading ? <img className="loading" src="img/loading.gif" alt="loading" /> : <Card data={data} />}
        </S.main>
      </>
    );
  }
}

export default App;

const S = {};

S.form = styled.form`
  margin: 0 auto;
  display: inline-block;
`;

S.main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  & .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & .no-data {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 36px;
    color: white;
    font-weight: 600;
    text-align: center;
    margin-top: 100px;
  }
`;
