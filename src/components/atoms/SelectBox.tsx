//  셀렉트 박스 컴포넌트 수정 필요함 -> 인풋 창으로 알고있는데 디자인 변경이 없음
'use client';

import React from 'react';

interface SelectBoxProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

const SelectBox = ({ value, options, onChange }: SelectBoxProps) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-[220px] h-[44px] border border-gray-300 rounded-full px-4 text-gray-500"
    >
      <option value="">태어난 연도</option>
      {options.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
