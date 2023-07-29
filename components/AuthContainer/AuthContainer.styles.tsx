import { styled } from "styled-components";

export const AuthContainerDiv = styled("div")<{ $minHeight?: number }>(
  ({ theme, $minHeight }) => `
    height : ${$minHeight}px;
    color : ${theme.colors.secondaryColor};
    padding : 20px;
    border-radius : 20px;
    margin : 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    form {
      width: 100%;
    }
    .main-text {
      margin-top: 200px;
      margin-bottom: 100px;
      width: 100%;
      color: white;
      .main-text-title {
        font-size: 34px;
      }
      .main-text-description {
        font-size: 20px;
      }
    }
    input {
      margin: 10px 0;
      border-radius: 30px;
      color: white;
    }
    button {
      width: 100%;
      background: white;
      color: grey;
      border-radius: 30px;
    }
`
);
