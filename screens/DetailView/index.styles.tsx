import { styled } from "styled-components";

export const StyledSection = styled("section")(
  ({ theme }) => `
  height: 100vh;
  position: relative;
  overflow: hidden;

  p.place{
    font-family: sans-serif;
    font-size:13px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; 
    white-space: pre-wrap; 
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
    bottom: 40px;
    text-shadow: 20px 20px 40px #000000;
    img {
      height: 200px;
      width: -webkit-fill-available;
      object-fit: cover;
    }
    img.weatherIcon{
      width: 50px;
      height: auto;
      margin-bottom:5px;
    }
    .title {
      position: absolute;
      bottom: 29px;
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
      grid-template-columns: 1fr 150px;
      grid-column-gap: 16px;
      padding-bottom: 16px;
  
      img {
        height: auto;
        width: 150px;
        border-radius: 14px;
      }
    }

  }

  .search {
    position: absolute;
    bottom: 0;
    background: ${theme.body};
    padding: 32px 16px;
    margin-bottom: 0;
  }

  .img-col {
    cursor: pointer;
  }
`
);
