import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { Form, Grid } from 'semantic-ui-react';
import SlidingPanel from '../../components/SlidingPanel';
import InformationList from '../../components/InformationList';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { Divider, Dropdown } from 'semantic-ui-react';




const About = () => {

    const TitleWrapper = styled.div`
    text-align: center;
    margin-bottom: 40px;
    `;

    const Title = styled.h1`
    color: #00ab41;
    margin-bottom: 10px; 
    `;

    const Subtitle = styled.p`
    color: black;
    margin-top: 0; 
    font-size: 1.2em;
    `;

    const messageContainerStyle: React.CSSProperties = {
        height: '30px', 
        textAlign: 'center',
        margin: '10px 0'
      };
    
    return (
        <Grid centered style={{ height: '100vh', paddingTop: '50px' }}>
            <Grid.Column style={{ maxWidth: '80%' }}>
                <TitleWrapper>
                    <Title>About</Title>
                    <Subtitle>
                        This website allows for simple and efficient visualization of the progress
                        of the <a href="https://njtrees.org"> New Jersey Tree Foundation </a>. By
                        clicking on <a href="http://localhost:3000"> View Map </a>, you can see all
                        the trees planted thus far by the organization, filtering by details such as
                        species, planting year, and caretaker. Click on a marker to see some more
                        specific details about that tree!
                        <br></br><br></br>
                        Additionally, if you are an NJ Tree administrator, you can click on 
                        <a href="http://localhost:3000/upload"> Upload </a> to see a tab where you
                        can upload new tree data to the map as a properly formatted .csv file. The new data will overwrite
                        the previous data, so make sure to double-check before uploading new data. Also,
                        only a limited number of uploads can be made per month, so only upload when necessary.
                        When you're ready to upload, type in the authorized password and press submit. The 
                        uploading process should take about 10-15 minutes, and then you will be able to see all
                        the new trees on the map!
                        <br></br>
                    </Subtitle>
                </TitleWrapper>
            </Grid.Column>
        </Grid>
        // <Container>
        //     <div style={messageContainerStyle}>
        //         <p> This site contains TreeMap, a product for the New Jersey Tree Foundation! </p>
        //     </div>   
        // </Container>
    );

    
};

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;



export default About;
