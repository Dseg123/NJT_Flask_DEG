import React from 'react';
import styled from 'styled-components';

interface StatusMessageProps {
  message: string;
}

const ErrorMessage = styled.p`
  color: green;
  text-align: center;
  font-weight: bold;
  margin: 20px 0; 
`;

const StatusMessage: React.FC<StatusMessageProps> = ({ message }) => {
  return <ErrorMessage>{message}</ErrorMessage>;
};

export default StatusMessage;
