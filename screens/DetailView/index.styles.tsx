import { styled } from "styled-components";

export const StyledSection = styled("section")(
  ({ theme }) => `
  height: 100vh;
  position: relative;

  .img-container {
    position: relative;
    img {
      height: 200px;
      width: -webkit-fill-available;
    }
    .title {
      position: absolute;
      bottom: 24px;
      left: 24px;
    }
  }

  .content-container {
    border-radius: 14px 14px 0 0;
    position: absolute;
    top: 190px;
    background: ${theme.body};
    width: 100%;
    height: calc(100vh - 190px);
    padding: 16px;
  }

  .btn {
    position: absolute;
    bottom: 24px;
  }
`);
