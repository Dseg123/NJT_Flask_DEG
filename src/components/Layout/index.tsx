import React from 'react';
import styled from 'styled-components';

import NJTreesLogo from '../../assets/nj_trees_logo.webp';

import { Button } from 'semantic-ui-react';
interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <NavBar>
          <a href="https://njtrees.org/" target="_blank">
            <Logo>
              <img src={NJTreesLogo} /> <p>New Jersey Tree Foundation</p>
            </Logo>
          </a>
        
        <OptionsContainer>
          <a href="http://localhost:3000">
            <p>View Map</p>
          </a>
          <a href="http://localhost:3000/upload">
            <p>Upload</p>
          </a>
          <a href="http://localhost:3000/about">
            <p>About</p>
          </a>
        </OptionsContainer>
      </NavBar>
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
`;

const NavBar = styled.nav`
  display: flex;
  height: 60px;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #c0c0c0;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 8px;

  & > h5 {
    // font-family: 'Quattrocento', serif !important;
  }

  & > img {
    height: 100%;
    padding: 8px;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  height: 100%;
  margin-left: auto;
  margin-right: 8px;

  & > a > p {
    color: #888888;
  }
`;

export default Layout;
