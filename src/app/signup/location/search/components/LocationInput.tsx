import React from 'react';
import { Input } from '@heroui/react';

interface LocationInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const LocationInput: React.FC<LocationInputProps> = ({
  value,
  onChange,
  placeholder = '동명(읍·면)으로 검색 (예: 서초동)',
  className = '',
}) => (
  <Input
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`body2 ${className} bg-neutral-200 px-2 py-2 rounded-full mb-1`}
  />
);

export default LocationInput;
