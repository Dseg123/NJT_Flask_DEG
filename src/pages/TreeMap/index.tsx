import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import styled from 'styled-components';

import SlidingPanel from '../../components/SlidingPanel';
import InformationList from '../../components/InformationList';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { Divider, Dropdown } from 'semantic-ui-react';

import useGetTreeData from './useGetTreeData';
import { useMapEvent } from 'react-leaflet';
import { TreeData } from '../../config/tree';
import { toTitleCase } from './utils';

import 'leaflet.markercluster/dist/leaflet.markercluster.js';
import * as L from 'leaflet';

/**
 * A page that displays an interactive tree map.
 */
const MapContent = () => {
  const map = useMap();
  const treeData = useGetTreeData();

  const markerClusterRef = useRef<L.MarkerClusterGroup>(L.markerClusterGroup({ disableClusteringAtZoom: 18 }));
  const [currentTree, setCurrentTree] = useState<TreeData | null>(null);
  const [infoPanelVisible, setInfoPanelVisible] = useState(false);

  useMemo(() => {
    // map.attributionControl.setPosition('bottomleft');
    // map.zoomControl.setPosition('bottomleft');

    map.on('click', () => {
      setCurrentTree(null);
      setInfoPanelVisible(false);
    });

    markerClusterRef.current.clearLayers();
    treeData
      .filter((x) => x.coords)
      .map((tree) => {
        const factor = 10000;
        const new_c1 = tree.coords[1] + (Math.random() - 0.5)/factor;
        const new_c0 = tree.coords[0] + (Math.random() - 0.5)/factor;
        const marker = L.marker([new_c1, new_c0]);
        const popup = L.popup().setContent(
          `${toTitleCase(tree.commonName)} (${toTitleCase(tree.latinName)}) <br />Coordinates: ${new_c0}°N, ${
            new_c1
          }°W`
        );

        marker.on('click', () => {
          setCurrentTree(currentTree !== tree ? tree : null);
          setInfoPanelVisible(currentTree !== tree);
        });

        marker.on('popupclose', () => {
          setCurrentTree(null);
          setInfoPanelVisible(false);
          console.log('haaai');
        });

        marker.bindPopup(popup);
        markerClusterRef.current.addLayer(marker);
      });
    return null;
  }, [treeData.length]);

  useEffect(() => {
    map.addLayer(markerClusterRef.current);
  }, []);

  /** Handles when the user collapses the information panel. */
  const handleOnInfoPanelCollapse = useCallback(() => {
    setInfoPanelVisible(false);

    // Close the popup if it is open.
    // (document.querySelectorAll('.leaflet-popup-close-button')[0] as HTMLElement).click();
  }, []);

  // TODO: Potential feature. Implement search functionality.
  // const handleSearch = (searchTerm: string) => {
  //   console.log('Searching for:', searchTerm);
  //   // Implement  search logic here
  // };

  return (
    <div style={{ height: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <SlidingPanel visible={infoPanelVisible} onCollapse={handleOnInfoPanelCollapse}>
        {currentTree && (
          <InformationList>
            <InformationList.Header>Tree Information</InformationList.Header>
            <InformationList.Field fieldName="Name" fieldValue={toTitleCase(currentTree.commonName)} />
            <InformationList.Field fieldName="Species" fieldValue={toTitleCase(currentTree.latinName)} />

            <InformationList.Header>Planting Information</InformationList.Header>
            <InformationList.Field fieldName="City" fieldValue={toTitleCase(currentTree.city)} />

            <InformationList.Field
              fieldName="Coordinates"
              fieldValue={`${currentTree.coords[0]}°N, ${currentTree.coords[1]}°W`}
            />
            <InformationList.Field fieldName="Planting Year" fieldValue={currentTree.plantingYear} />
            <InformationList.Field fieldName="Planting Season" fieldValue={toTitleCase(currentTree.plantingSeason)} />
            <InformationList.Field fieldName="Caretaker" fieldValue={toTitleCase(currentTree.treeCareTaker)} />
          </InformationList>
        )}
      </SlidingPanel>
      {/* <FilterPanel><SearchBar onSearch={handleSearch} /></FilterPanel> */}
    </div>
  );
};

const FilterPanel = () => {
  return (
    <FilterPanelWrapper>
      <InformationList>
        <InformationList.Header gutterBottom={false}>Apply filters</InformationList.Header>
        <InformationList.Field fieldName="Filter through tree markers on the map." fieldValue="" />
        <Divider horizontal />
        <InformationList.Field fieldName="Planting Year" fieldValue="" />
        {/* NOTE: HARD CODED FOR PROTOTYPING. */}
        <Dropdown
          placeholder="Planting Year"
          fluid
          clearable
          multiple
          search
          selection
          options={[
            { key: 1, text: '2005', value: 2005 },
            { key: 2, text: '2006', value: 2006 },
            { key: 3, text: '2007', value: 2007 },
            { key: 4, text: '2008', value: 2008 },
            { key: 5, text: '2009', value: 2009 }
          ]}
        />
        <Divider />
        <InformationList.Field fieldName="Planting Season" fieldValue="" />
        <Dropdown
          placeholder="Planting Season"
          fluid
          clearable
          multiple
          search
          selection
          options={[
            { key: 6, text: 'Fall', value: 'Fall' },
            { key: 7, text: 'Winter', value: 'Winter' }
          ]}
        />
        <Divider />
        <InformationList.Field fieldName="Caretaker" fieldValue="" />
        <Dropdown
          placeholder="Caretaker"
          fluid
          clearable
          multiple
          search
          selection
          options={[
            { key: 8, text: 'McDonalds', value: 'McDonalds' },
            { key: 9, text: 'E. Franklin & Sons Auto Body', value: 'E. Franklin & Sons Auto Body' },
            { key: 10, text: 'Burger King', value: 'Burger King' }
          ]}
        />
      </InformationList>
    </FilterPanelWrapper>
  );
};

const FilterPanelWrapper = styled.div`
  margin-top: 4px;
  margin-left: 4px;
  margin-right: 4px;
  height: calc(100% - 8px);
  // width: clamp(220px, 18vw, 320px);
  width: clamp(210px, 18vw, 320px);
  padding: 1.2rem !important;
  padding-top: 0 !important;
  background: #ffffff;
  border: 1px solid #c0c0c0 !important;
  border-radius: 12px !important;
`;

const TreeMap = () => {
  return (
    <Container>
      <FilterPanel />
      <MapView center={[40.220581, -74.75972]} zoom={8} minZoom={5} maxZoom={18}>
        <MapContent />
      </MapView>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const MapView = styled(MapContainer)`
  height: calc(100% - 8px);
  width: 100%;
`;

export default TreeMap;
