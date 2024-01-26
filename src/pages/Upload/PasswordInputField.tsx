import React, { ChangeEvent } from 'react';
import { Form, Input } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-size: 1.5em; 
`;

interface PasswordInputFieldProps {
  password: string;
  onPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInputField: React.FC<PasswordInputFieldProps> = ({ password, onPasswordChange }) => (
  <Form.Field>
    <StyledLabel className="form-label">Password</StyledLabel>
    <Input type="password" value={password} onChange={onPasswordChange} />
  </Form.Field>
);

export default PasswordInputField;
