import { styled } from "styled-components";

export const StyledCard = styled("section")`
  border-radius: 12px;
  padding: 5px;
  margin-right: 8px;
  display: flex;
  height: 130px;

  div {
    padding: 12px;
    font-size: 18px;
    width: max-content;
    .subtitle {
      font-size: 12px;
    }
  }

  img {
    height: 120px;
    width: 120px;
    border-radius: 12px;
  }

  &.vertical-view {
    flex-direction: column;
    width: 70%;
    height: auto;
    img {
      height: 200px;
      width: -webkit-fill-available;
    }
    div {
      padding: 4px 12px;
      width: auto;
    }
  }
`;
