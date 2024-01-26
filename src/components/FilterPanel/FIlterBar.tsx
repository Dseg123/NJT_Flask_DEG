import React, { memo, ReactNode, useState } from 'react';
import styled from 'styled-components';
import { Input } from 'semantic-ui-react';

interface FilterBarProp {
  placeholder?: string;
  // children?: ReactNode;
  onSearch: (value: string) => void;
}

const FilterBar: React.FC<FilterBarProp> = ({ placeholder = 'Search...', onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  return (
    <SearchBarWrapper>
      <Input
        icon="search"
        // iconPosition="right"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
        style={{ width: '100%' }}
      />
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto
  padding-bottom: 0.48rem;
  font-size: 1.12em;
  align-items: center;

  & span {
    color: #404040;
    width: 100%;
  }
}`;

FilterBar.displayName = 'FilterBar';
export default memo(FilterBar);
