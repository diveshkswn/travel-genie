import styled from 'styled-components';

export const TimelineContainer = styled.div`
  position: relative;
  margin: 50px 0;
  color: brown;

  h2 {
    font-size: 40px;
    font-family: cursive;
    text-align: center;
  }

  hr {
    border: 3px solid brown;
    border-radius: 5px;
  }

`;

export const TimelineItem = styled.div`
  position: relative;
  padding: 20px;
  margin-bottom: 20px;
  background-color: rgba(66, 99, 122, 0.3);
  border-radius: 5px;
`;

export const TimelineItemTime = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const TimelineItemTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const TimelineItemDescription = styled.div`
  font-size: 22px;
`;

export const TimelineConnector = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background-color: #ccc;
`;

export const TimelineDot = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #007bff;
`;