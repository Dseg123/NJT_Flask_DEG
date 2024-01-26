import React from 'react';
import { Form, Button } from 'semantic-ui-react';

interface SubmitButtonProps {
  loading: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ loading }) => (
  <Form.Field style={{ textAlign: 'center', marginTop: '10px' }}>
    <Button type="submit" loading={loading} disabled={loading} color='green'>
      Submit
    </Button>
  </Form.Field>
);

export default SubmitButton;
