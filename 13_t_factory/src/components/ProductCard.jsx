import React from "react";
import styled from "styled-components";
import StoreSVG from "../assets/store.svg?react";
import ExpandSVG from "../assets/expand.svg";
import LazyImage from "./Lazy";
import { setShowModal } from "../store";
import { useDispatch } from "react-redux";

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();

  return data.map((e) => {
    let { id, image, name, price, artist } = e;

    return (
      <S.Container key={id}>
        <div
          className="thumbnail"
          onClick={() => {
            dispatch(setShowModal({ show: true, product: image }));
          }}>
          <LazyImage placeholderSrc={`https://gpx.ge/root/img/tfactory/placeholder/${image}`} placeholderStyle={{ width: "100%" }} placeholderClassName="placeholderClassName" src={`https://gpx.ge/root/img/tfactory/raw/${image}`} alt="my-image" className="imageClassName" style={{ width: "100%" }} />

          {/* <LazyLoadImage alt={name} height={"100%"} width={"100%"} threshold={-140} placeholderSrc={`https://gpx.ge/root/img/tfactory/placeholder/${image}`} src={`https://gpx.ge/root/img/tfactory/raw/${image}`} /> */}

          <div className="artist">
            <StoreIcon /> by {artist}
          </div>
        </div>
        <footer>
          <h1>
            {/* {id} */}
            {name}
          </h1>
          <h2>{formatPrice(price)}</h2>
        </footer>
      </S.Container>
    );
  });
};

export default ProductCard;
const S = {};

S.Container = styled.article`
  width: 100%;
  max-width: 360px;
  height: auto;

  .thumbnail {
    position: relative;
    height: auto;
    width: 100%;
    overflow: hidden;
    cursor: pointer;

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      background-color: #a0a0a06f;
      z-index: 0;
      width: 100%;
      height: 100%;
      content: url(${ExpandSVG});
      opacity: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s linear;
    }
    &:hover::after {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: all 0.3s linear;
  }

  .artist {
    position: absolute;
    bottom: 0;
    background-color: #ffffffbf;
    width: 100%;
    opacity: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 12px 6px;
    gap: 20px;
    transition: all 0.3s linear;
    z-index: 2;
  }

  &:hover .artist {
    opacity: 1;
  }

  &:hover {
    box-shadow: -1px 1px 13px 0px rgba(0, 0, 0, 0.17);
  }

  &:hover footer {
    padding: 6px;
  }

  footer {
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    padding: 6px 0;
    transition: all 0.2s;
  }

  h1 {
    font-size: 18px;
    text-transform: capitalize;
  }

  footer h5 {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  h2 {
    color: red;
    letter-spacing: 0.1rem;
    margin-bottom: 0;
    font-weight: 400;
    font-size: 16px;
    font-weight: bold;
  }
`;

const StoreIcon = styled(StoreSVG)`
  width: 36px;
  path {
    fill: #bbdc56;
  }
`;

const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
};
