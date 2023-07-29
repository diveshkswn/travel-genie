import { styled } from "styled-components";

export const StyledSection = styled("section")(
  ({ theme }) => `
  height: 100vh;
  position: relative;
  overflow: hidden;
  p.place{
    font-family: sans-serif;
    font-size:13px;
  }
  p{
    margin-bottom:30px;
  }
  h2{
    font-family: 'Bebas Neue', sans-serif;
    font-size:55px;
  }

  span{
    font-family: "Agdasima", sans-serif;
    font-size:30px;
  }

  .day-details{
    padding-top:10px;
    font-family: "Agdasima", sans-serif;
    font-size: 20px;
    h3{
      font-size:30px;
    }
    h5 {
      font-family: "Montserrat", sans-serif;
      letter-spacing: 2px;
    }
  }

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
    overflow-y: scroll;
    padding-bottom: 100px;

    .img-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 16px;
      padding-bottom: 16px;
  
      img {
        height: auto;
        width: 180px;
        border-radius: 14px;
      }
    }

  }

  .btn {
    position: absolute;
    bottom: 24px;
  }
`
);
