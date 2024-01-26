import React, { memo, ReactNode } from 'react';
import styled from 'styled-components';

interface InformationListHeaderProps {
  gutterBottom?: boolean; // Whether to add a bottom margin to the header.
  children: ReactNode;
}

export const InformationListHeader: React.FC<InformationListHeaderProps> = ({ gutterBottom = true, children }) => {
  return (
    <InformationListHeaderWrapper style={{ marginBottom: gutterBottom ? '0.48rem' : '0.24rem' }}>
      <h4>{children}</h4>
    </InformationListHeaderWrapper>
  );
};

const InformationListHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.68rem;

  font-family: 'Roboto', 'Times New Roman';
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #404040;

  & > span {
    height: 4px;
    width: 1rem;
    background: #afd48d;
  }
`;

InformationListHeader.displayName = 'InformationListHeader';

export default memo(InformationListHeader);
