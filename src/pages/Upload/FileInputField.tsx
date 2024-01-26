import React, { ChangeEvent } from 'react';
import { Form } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-size: 1.5em; 
`;

interface FileInputFieldProps {
  onFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FileInputField: React.FC<FileInputFieldProps> = ({ onFileChange }) => (
  <Form.Field>
    <StyledLabel className="form-label">Upload Spreadsheet Here</StyledLabel>
    <input type="file" onChange={onFileChange} accept=".csv" />
  </Form.Field>
);

export default FileInputField;
