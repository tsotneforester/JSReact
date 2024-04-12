import styled from "styled-components";
import Star from "./Star";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Card({ data }) {
  return data.map((item) => {
    let { id, title, poster_path: poster, vote_average: rating, release_date: premiered, genre_ids: genre } = item;
    return (
      <S.wrapper key={id}>
        <div className="img-side">
          <LazyLoadImage
            width="100%"
            height="100%"
            src={"https://image.tmdb.org/t/p/original" + poster} //
            alt={title}
            placeholderSrc="./img/empty.jpg"
          />
        </div>
        <div className="info-side">
          <h1>{title}</h1>
          <h6>{genre.join(", ")}</h6>
          <div className="rating">
            <Star rating={Number(rating.toFixed(0))} />
          </div>
          <div className="filminfo">
            <span>{Number(rating.toFixed(1))}</span>
            <span>{premiered.slice(0, 4)}</span>
          </div>
        </div>
      </S.wrapper>
    );
  });
}

export default Card;

const S = {};

S.wrapper = styled.article`
  width: 100%;
  max-width: 280px;
  border-radius: 12px;
  background-color: transparent;
  margin: 20px;
  display: flex;
  flex-direction: row;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  @media only screen and (min-width: 480px) {
    max-width: 390px;
    height: 300px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  & .img-side {
    width: 100%;
    height: 210px;
    overflow: hidden;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    @media only screen and (min-width: 480px) {
      height: 100%;
      border-radius: 0;
      border-bottom-left-radius: 12px;
      border-top-left-radius: 12px;
    }

    & img {
      object-fit: cover;
      /* object-position: top; */
    }
  }

  & .info-side {
    width: 100%;
    //width: 60%;
    height: 100%;
    padding: 12px;
    background-color: black;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    color: white;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: flex-start;
    row-gap: 20px;
    @media only screen and (min-width: 480px) {
      border-radius: 0;
      border-bottom-right-radius: 12px;
      border-top-right-radius: 12px;
    }
    & h1 {
      font-size: 24px;
      color: white;
      font-weight: 800;
      text-align: left;
      //height: 78px;
      overflow: hidden;
    }
    & h6 {
      font-size: 14px;
      color: white;
      font-weight: 400;
      text-align: left;
      font-style: italic;
    }
    & .rating {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
    }
    & .filminfo {
      font-size: 16px;
      color: rgb(255, 205, 5);
      font-weight: 600;
      text-align: left;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }
`;
