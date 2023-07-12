import { styled } from "styled-components";

export const CarouselSection = styled("section")`
  width: 100%;
  height: 100vh;

  .glide {
    width: 100%;
  }
  .glide__slide img {
    width: 100%;
    height: 100vh;
    // Needs object-fit polyfill for IE
    object-fit: cover;
  }

  .glide__bullets {
    display: flex;
    justify-content: center;
    margin-right: -10px;
    margin-left: -10px;
  }

  .glide__bullet {
    position: relative;
    display: flex;
    flex: 0 1 calc(100% / 3);
    max-width: calc(100% / 3);
    padding: 0;
    border: 0;
    overflow: hidden;
    color: #fff;
    height: 5px;
    margin-right: 10px;
    margin-left: 10px;
    background-color: transparent;
    box-shadow: inset 0px -4px 0px 0px lightgrey;

    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 4px;
      display: block;
      opacity: 0;
      transform: translateX(-100%);
      background-color: #fff;
      transition: transform 5s;
    }
  }

  .glide__bullet--active {
    &:before {
      opacity: 1;
      transform: translateX(0);
    }
  }

  img {
    width: 200px;
    height: 200px;
  }
  li {
    background-image:
    linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),
    position: relative;
    z-index: 1;
  }
  .content {
    position: absolute;
    z-index: 2;
    top: 0;
    text-align:center;
    h1{
      text-align:center;
    }
  }
  .img-gradient{
    position:relative;
    display:inline-block;
  }
  
  
  /* 
  #002f4b,#dc4225 
  Convert HEX to RGBA - http://hex2rgba.devoth.com/
  */
  .img-gradient:after {
    content:'';
    position:absolute;
    left:0; top:0;
    width:100%; height:100%;
    display:inline-block;
    background: -webkit-linear-gradient(top, rgba(0,0,0,0.7) 0%,rgba(255,255,255, 0) 100%); /* Chrome10+,Safari5.1+ */
  }
  .img-gradient img{
    display:block;
  }
`;
