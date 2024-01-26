import React, { memo, ReactNode } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

interface FilterPanelProp {
  children: ReactNode;
}

interface FilterPanelComponent extends React.FC<FilterPanelProp> {
  Search: typeof SearchBar;
  //   Field: typeof InformationListField;
}

const FilterPanel: FilterPanelComponent = ({ children }) => {
  return <FilterPanelWrapper>{children}</FilterPanelWrapper>;
};

const FilterPanelWrapper = styled.div`
  z-index: 1000;
  display: flex;
  flex-direction: column;

  position: absolute;
  width: 30%;
  padding-top: 4px;
  padding-left: 4px;
  border-radius: 12px;
`;

FilterPanel.displayName = 'FilterPanel';
FilterPanel.Search = SearchBar;

// InformationList.displayName = 'InformationList';
// InformationList.Header = InformationListHeader;
// InformationList.Field = InformationListField;

export default memo(FilterPanel);
