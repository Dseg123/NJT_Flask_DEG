import React, { memo, ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

interface InformationListFieldProps {
  icon?: ReactNode;
  fieldName: string;
  fieldValue: string;
  children?: ReactNode;
}

const InformationListField: React.FC<InformationListFieldProps> = ({ icon, fieldName, fieldValue, children }) => {
  return (
    <InformationListFieldWrapper>
      <Key>
        {icon && <>{icon} &nbsp;</>} <p>{fieldName}</p>
      </Key>
      <p>{fieldValue}</p>
      {children}
    </InformationListFieldWrapper>
  );
};

const InformationListFieldWrapper = styled.div`
  display: flex;
  margin-bottom: 0.48rem;
  font-size: 1.25em;
  align-items: center;

  & > p {
    color: #404040;
    width: 100%;
    text-align: right;
  }
}`;

const Key = styled.div`
  display: flex;
  align-items: center;

  & > p {
    color: #a0a0a0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  & > svg {
    height: 1.46rem;
    min-height: 1.46em;
    width: 1.46em;
    min-width: 1.46em;
    filter: invert(52%) sepia(0%) saturate(1%) hue-rotate(2deg) brightness(97%) contrast(90%);
  }
`;

InformationListField.displayName = 'InformationListField';

export default memo(InformationListField);
