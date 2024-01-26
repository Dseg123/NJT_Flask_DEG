import React from 'react';
import { Loader } from 'semantic-ui-react';
import styled from 'styled-components';

const CustomLoader = styled(Loader)`
  &&& {
    margin-top: 20%; // Adjust the margin as needed
    font-size: 1.0em; // Increase the font size for larger loader
  }
`;


const LoadingMessage: React.FC = () => (
  <>
    <CustomLoader active inline='centered' size='massive'>Processing File</CustomLoader>
   </>
);

export default LoadingMessage;
