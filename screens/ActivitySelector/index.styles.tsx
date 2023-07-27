import { styled } from "styled-components";

export const StyledContainer = styled("section")(
    ({ theme }) => `
    padding: 20px;
    border-radius: 10px; 
    display: flex;
    justify-content: center;
    background: #3a486c;
    flex-wrap: wrap;
`);
