'use client';

import React from 'react';
import SelectBox from '@/components/atoms/SelectBox';

interface YearSelectFieldProps {
  value: string;
  onChange: (value: string) => void;
}

const YearSelectField = ({ value, onChange }: YearSelectFieldProps) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => String(currentYear - i));

  return <SelectBox value={value} options={years} onChange={onChange} />;
};

export default YearSelectField;
