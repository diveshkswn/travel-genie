import styled from 'styled-components';

export const StyledContainer = styled.section`
    box-shadow: inset -3px -15px 20px 20px rgb(228 238 238 / 50%);
`;

export const Banner = styled.div`
  height: 300px;
  background-position: center;
  padding-bottom: 30px;
  position: relative;
  text-shadow: 20px 20px 40px #000000;
  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`;

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
  height: 100%;
  padding: 20px;
  position: relative;
  z-index: 1;

  button {
    width: 100px;
    color: #fff;
    background: red;
    border-color: red;
    padding: 8px 4px;
    border-radius: 10px;
  }

  h1 {
    margin: 20px 0 10px;
  }

  p {
    padding-top: 0;
  }
`;

export const Main = styled("div")(
  ({ theme }) => `
  padding: 20px;
  background-color: ${theme.background};
  color: ${theme.colors.primaryColor}
`);

export const MainImg = styled.div`
  margin: 0 auto;
  text-align: center;

  img {
    height: 100px;
    width: 100px;
    border-radius: 14px;
    margin: 10px;
  }
`;

export const MainTags = styled.div`
  display: flex;
  flex-wrap: wrap;

  a {
    margin: 10px 10px 0px 0px;
    padding: 4px 8px;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const TimeLine = styled.div`
  padding: 20px;
  background: #f7e2e2;
  font-size: 20px;

  p {
    margin-block-start: 0;
    margin-block-end: 0;
    position: relative;
    padding-left: 10px;
    padding-bottom: 10px;

    &::before {
      position: absolute;
      content: '';
      left: 0;
      top: 0;
      width: 3px;
      height: 100%;
      background: #5c0404;
    }
  }
`;