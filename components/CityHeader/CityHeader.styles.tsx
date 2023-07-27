import { styled } from "styled-components";

export const CityHeaderSection = styled("section")`
  width: 375px;
  margin-top: 50px;

  h1 {
    font-family: "Agdasima", sans-serif;
    font-size: 48px;
    letter-spacing: 2px;
  }

  button {
    background: none;
    border: none;
    width: 40px;
    height: 40px;
  }
  .trip-selection {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;

    span {
      width: 40px;
      border-radius: 40px;
      border: 1px solid #fff;
    }
  }
`;
