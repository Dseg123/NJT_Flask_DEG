import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import axios from 'axios';
import { Form, Grid } from 'semantic-ui-react';
import TitleComponent from './TitleComponent';
import StatusMessage from './StatusMessage';
import FileInputField from './FileInputField';
import PasswordInputField from './PasswordInputField';
import SubmitButton from './SubmitButton';
import LoadingMessage from './LoadingMessage';


const UploadComponent: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState<string>('');
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  
  const resetFormFields = () => {
    setPassword('');
    setFile(null);
  };

  const checkLoadingStatus = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/get_loading');
      if (response.data === 'Loading') {
        setLoading(true);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error('Error checking loading status:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // const savedLoadingStatus = localStorage.getItem('isLoading');
    const interval = setInterval(checkLoadingStatus, 5000); // Poll every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    } else {
      setFile(null); 
    }
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (file && password) { 
      setLoading(true);
      const formData = new FormData();
      formData.append('upload_file', file);
      formData.append('upload_auth_token', password);

      try {
        setLoading(true);
        const response = await axios.post('http://127.0.0.1:5000/add_items', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setUploadStatus(response.data);
      } catch (error) {
        console.error('Error uploading file:', error);
        setUploadStatus('Error uploading file.');
      } finally {
        setLoading(false);
        resetFormFields();
      }
    } else {
      setUploadStatus('Please provide both a file and a password.');
    }
  };
  const messageContainerStyle: React.CSSProperties = {
    height: '30px', 
    textAlign: 'center',
    margin: '10px 0'
  };

  return (
    <Grid centered style={{ height: '100vh', paddingTop: '50px' }}>
      <Grid.Column style={{ maxWidth: '80%' }}>
        {loading ? (
          <>
            <TitleComponent isLoading={loading} />
            <LoadingMessage />
          </>
        ) : (
          <>
            <TitleComponent isLoading={loading} />
            <Form onSubmit={handleSubmit}>
              <FileInputField onFileChange={handleFileChange} />
              <PasswordInputField password={password} onPasswordChange={handlePasswordChange} />
              <div style={messageContainerStyle}>
                {uploadStatus && <StatusMessage message={uploadStatus} />}
              </div>
              <SubmitButton loading={loading} />
            </Form>
          </>
        )}
      </Grid.Column>
    </Grid>
  );
};

export default UploadComponent;