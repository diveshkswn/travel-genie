import { styled } from "styled-components";

export const StyledTabs = styled("ul")(
  ({ theme }) => `
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  padding: 0;
  border-bottom: 1px solid ${theme.border};

  &::webkit-scrollbar {
    display: none;
  }

  li {
    list-style-type: none;
    padding: 8px 0;
    margin-right: 16px;
    cursor: pointer;
    color: ${theme.colors.secondaryColor};

    &:focus, &:hover {
        color: ${theme.colors.primaryColor} !important;
    }

    &.selected {
        color: ${theme.colors.primaryColor} !important;
        border-bottom: 2px solid ${theme.colors.primaryColor};
    }
  }
`
);
