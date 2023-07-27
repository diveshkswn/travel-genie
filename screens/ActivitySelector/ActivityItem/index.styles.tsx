import { styled } from "styled-components";

export const StyledItemContainer = styled("div")(
    () => `
    margin: 5px;
    text-align: center;
    height: 150px;
    width: 150px;
    display: flex;
    justify-content: center;
    margin-bottom: 80px;

    .activity-item-container {
        margin: 10px;
        cursor: pointer;
        background-color: #4d4d4d;
        
        border-radius: 50%;
        width: 95px;
        height: 95px;
        

        img {
            width: 95px;
            height: 95px;
            object-fit: cover;
            border-radius: 50%;
            border: 2px solid black;
        }
    }
  `);
