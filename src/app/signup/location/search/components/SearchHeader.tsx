import React from 'react';
import BackButton from '@/components/atoms/BackButton';
import LocationInput from './LocationInput';

interface SearchHeaderProps {
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBack?: () => void;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({ inputValue, onInputChange, onBack }) => (
  <div className="flex items-center">
    <BackButton onClick={onBack} />
    <div className="flex-1 ml-3">
      <LocationInput value={inputValue} onChange={onInputChange} />
    </div>
  </div>
);

export default SearchHeader;
