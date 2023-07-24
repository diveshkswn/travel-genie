import { styled } from "styled-components";

export const StyledCard = styled("section")`
  border-radius: 12px;
  width: 70%;
  padding: 3px;
  margin-right: 8px;

  img {
    height: 150px;
    width: -webkit-fill-available;
    border-radius: 12px;
  }

  div {
    padding: 4px 12px;
    font-size: 18px;
    .subtitle {
      font-size: 12px;
    }
  }
`;
