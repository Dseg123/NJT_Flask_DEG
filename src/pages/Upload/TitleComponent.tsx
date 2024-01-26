import React, { memo } from 'react';
import styled from 'styled-components';

interface TitleComponentProps {
  isLoading?: boolean;
}

const TitleComponent: React.FC<TitleComponentProps> = ({ isLoading = false }) => {
  return (
    <TitleWrapper>
      <Title>Upload File</Title>
      <Subtitle>
        {isLoading 
          ? "Data is currently processing"
          : "Please upload OR drag and drop your spreadsheet & the provided password"}
      </Subtitle>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  color: #00ab41;
  margin-bottom: 10px; 
`;

const Subtitle = styled.p`
  color: black;
  margin-top: 0; 
  font-size: 1.2em;
`;

TitleComponent.displayName = 'TitleComponent';
export default memo(TitleComponent);
