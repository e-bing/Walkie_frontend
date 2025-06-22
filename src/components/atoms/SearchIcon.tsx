import React from 'react';
import Image from 'next/image';

interface SearchIconProps {
  size?: number;
}

const SearchIcon: React.FC<SearchIconProps> = ({ size }) => (
  <Image src="/icons/search-icon.svg" alt="검색 돋보기 이미지" width={size} height={size} />
);

export default SearchIcon;
