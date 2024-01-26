import React, { ReactNode } from 'react';
import styled from 'styled-components';
import InformationListHeader from './InformationListHeader';
import InformationListField from './InformationListField';

interface InformationListProps {
  children: ReactNode;
}

interface InformationListComponents extends React.FC<InformationListProps> {
  Header: typeof InformationListHeader;
  Field: typeof InformationListField;
}

const InformationList: InformationListComponents = ({ children }) => {
  return <InformationListWrapper>{children}</InformationListWrapper>;
};

const InformationListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

InformationList.displayName = 'InformationList';
InformationList.Header = InformationListHeader;
InformationList.Field = InformationListField;

export default InformationList;
