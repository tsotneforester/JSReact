import React, { useContext } from "react";
import styled from "styled-components";
import { ReactComponent as StoreSVG } from "../assets/storefront.svg";
import ExpandSVG from "../assets/expand.svg";
import { root, device } from "../theme";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { DataContext } from "../Context";
import { formatPrice } from "../Functions";

const ProductCard = ({ data }) => {
  const { setActiveProduct, setModalOpened } = useContext(DataContext);

  return data.map((e) => {
    let { id, image, name, price, artist } = e;

    return (
      <Wrapper key={id}>
        <div
          className="thumbnail"
          onClick={() => {
            setModalOpened(true);
            setActiveProduct(image);
          }}>
          <LazyLoadImage
            src={`https://gpx.ge/root/img/tfactory/raw/${image}`}
            placeholderSrc={`https://gpx.ge/root/img/tfactory/placeholder/1.png${image}`} //
            effect="blur"
            alt="name"
          />

          <div className="artist">
            <StoreIcon /> by {artist}
          </div>
        </div>
        <footer>
          <h1>
            {/* {id}- */}
            {name}
          </h1>
          <h2>{formatPrice(price)}</h2>
        </footer>
      </Wrapper>
    );
  });
};

const Wrapper = styled.article`
  width: 100%;
  max-width: 360px;
  height: auto;
  @media ${device.mobile} {
  }
  @media ${device.tablet} {
  }

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
      content: url(${ExpandSVG});
      background-color: #a0a0a06f;
      z-index: 1;
      width: 100%;
      height: 100%;
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
    @media ${device.mobile} {
    }
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
`;

export default ProductCard;
